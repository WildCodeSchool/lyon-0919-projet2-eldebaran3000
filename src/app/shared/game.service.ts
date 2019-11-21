import { Injectable } from '@angular/core';
import { Building } from './building';
import { Case } from './case';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  /* Menu constructor changing colors */
  ironCostColor : string = "green"
  minWorkerColor: string = "green"
  
/*  initialisation du tableau contenant les objets disposés sur la grille (1 casou = 1cellule) */
  cases : Case[] = [];
  energyMax: number = 0;
  foodMax: number = 0;
  ironMax: number = 0;
  humanMax: number = 0;
  humanProd : number = 1;
  energyProd: number = 0;
  foodProd: number = 0;
  ironProd: number = 0;
  energy: number = 1500;
  food: number = 10000;
  human: number = 10;
  iron: number = 1500;
  foodConsumption : number;
  elecConsumption : number;
  popEarth : number = 400;
  
  //Stockbar
  energyProgress: number = (this.energy * 100) /this.energyMax ;
  foodProgress: number = (this.food * 100) /this.foodMax;
  ironProgress: number = (this.iron * 100) /this.ironMax;
  humanProgress: number = (this.human * 100) /this.humanMax;

  // Nombre de travailleurs Disponibles
  freeWorkers : number = this.human;

  // décès navette
  dead: number = 0
  /** Construction des batiments (étape 2/4) :
  *   Initialisation d'un objet temporaire contenant le batiment à construire.
  */
  buildingToConstruct: Building;
  totalDeadPeople: number = 0;

  //initialisation du total de population qu'il y a eu sur depuis le début et 
  //initialisation du pourcentage de mort sur cette population totale
  popTotal: number = this.human + this.totalDeadPeople;
  deathRating: number = 0;

  /* --------------Étape 3 dans cellule.component.ts------------------------- */

  constructor(private router : Router) {}

  /** Création de la grille  */
  caseBuilder(){
    for(let l = 1 ; l <= 20 ; l++){
      for(let c = 1 ; c <= 20 ; c++){
        let casou = new Case (false, false, c, l);
        this.cases.push(casou);
      };
    };
    return this.cases;
  }

  /** Construction des batiments (étape 4/4) :
  *   On ajoute au tableau d'objet contenant les cellules de la grille (cases), l'objet stockée dans "buildingToConstruct"
  *   dans la cellule sélectionnée sur la grille.
  *   Pour cela, on récupère l'index de la cellule séléctionnée : this.cases.indexOf(cell)
  *   Puis on ajoute à cet objet dans l'attribut building ... :  this.cases[...].building 
  *   ... l'objet à construire : ... = this.buildingToConstruct
  *   On indique que la case est occupée par un batiment avec ke booléen isOccuped
  *   On réinitialise la variable buildingToConstruct pour empecher de poser plusieurs batiments d'affilé
  */

  onBuildMode_Build(cell: Case) {
    if (this.buildingToConstruct.cost > this.iron){
      this.ironCostColor = "red";
    }
    if (this.buildingToConstruct.cost <= this.iron && this.freeWorkers > 0) {
      this.iron -= this.buildingToConstruct.cost;
    
      this.freeWorkers -= this.buildingToConstruct.minWorker;

      if (this.freeWorkers === 0) {
        this.minWorkerColor = "red";
      }
      this.cases[this.cases.indexOf(cell)].building = this.buildingToConstruct;
      this.cases[this.cases.indexOf(cell)].isOccuped = true;
      this.buildingToConstruct = undefined;
      this.getCapacity()
      this.getProductionCapacity()
      this.mappingRoad();
    }     
  }
  /* ---------------------------------------FIN--------------------------------------------------- */

//Stockage des capacités max qu'apporte chaque case en fonction du type de bâtiment
// Méthode appelée à la création et à la destruction des batiments
getCapacity () {
  let energyMax = 0;
  let foodMax = 0;
  let ironMax = 0;
  let humanMax = 0;
    this.cases.forEach(thisCase => {
      if (thisCase.building && thisCase.building.isActivateByRoad === true && thisCase.building.isActivateByEnergy === true) {
        switch(thisCase.building.name){
          case 'Power Station':
            energyMax += thisCase.building.maxCapacity;
            break;
          case 'Farm':
            foodMax += thisCase.building.maxCapacity;
            break;
          case 'Extractor':
            ironMax += thisCase.building.maxCapacity;
            break;
          case 'Dormitory':
            humanMax += thisCase.building.maxCapacity;
            break;
        };
      }; 
    });
    this.energyMax = energyMax;
    this.foodMax = foodMax;
    this.ironMax = ironMax;
    this.humanMax = humanMax;
    this.energyProgress = (this.energy * 100) /this.energyMax;
    this.foodProgress = (this.food * 100) /this.foodMax;
    this.ironProgress = (this.iron * 100) /this.ironMax;
    this.humanProgress = (this.human * 100) /this.humanMax;
  };

//Récupération et stockage des productions de chaque case en fonction du type de bâtiment

  getProductionCapacity() {
    let energyProd = 0;
    let foodProd = 0;
    let ironProd = 0;
    this.cases.forEach(thisCase => {
      if (thisCase.building && thisCase.building.isActivateByRoad === true && thisCase.building.isActivateByEnergy === true) {
        switch(thisCase.building.name){
          case 'Power Station':
            energyProd += Math.ceil(thisCase.building.production * (thisCase.building.nbWorkers/thisCase.building.maxWorker));  // Production d'energy proportionnelle au nombre de Worker
            break;
          case 'Farm':
            foodProd += Math.ceil(thisCase.building.production * (thisCase.building.nbWorkers/thisCase.building.maxWorker)); // Production de Food proportionnelle au nombre de Worker
            break;
          case 'Extractor':
            ironProd += Math.ceil(thisCase.building.production * (thisCase.building.nbWorkers/thisCase.building.maxWorker)); // Production de Iron proportionnelle au nombre de Worker
            break;
        };
      }; 
    });
    this.energyProd = energyProd;
    this.foodProd = foodProd;
    this.ironProd = ironProd;
  };


  productionBar() {
    this.getProductionCapacity()
    
    if (this.energy <= this.energyMax - this.energyProd && this.energy >= 0 - this.energyProd ) {
      this.energy += this.energyProd;
      this.energyProgress = (this.energy * 100) /this.energyMax;
    } 
    else if (this.energy >= this.energyMax - this.energyProd) { 
      this.energy = this.energyMax;
      this.energyProgress = (this.energy * 100) /this.energyMax;
    };
    
    if (this.food <= (this.foodMax - this.foodProd) && this.food >= 0 - this.foodProd) {
      this.food += this.foodProd;
      this.foodProgress = (this.food * 100) /this.foodMax;
    } 
    else if (this.food >= this.foodMax - this.foodProd) {
      this.food = this.foodMax;
      this.foodProgress = (this.food * 100) /this.foodMax;
    }
    if (this.iron <= (this.ironMax - this.ironProd) && this.iron >= 0) {
      this.iron += this.ironProd;
      this.ironProgress = (this.iron * 100) /this.ironMax;
    } 
    else if (this.iron >= this.ironMax - this.ironProd) {
      this.iron = this.ironMax;
      this.ironProgress = (this.iron * 100) /this.ironMax;
    };
  };

  getPopulation() {
    let newBorn = Math.ceil(0.1 * this.human);      //On stock 10% de la pop actuelle : représente les naissances annuels arrondie à l'entier inférieur
    if (this.human + newBorn <= this.humanMax) {    //On teste si la population et les nouveaux nés peuvent etres herbergés
      this.human += newBorn;                        //On ajoute les naissances à la population
      this.freeWorkers += newBorn  ;                //On ajoute les naissances aux travailleurs disponibles
      this.humanProd = newBorn;
      this.getDeathRating();
      this.humanProgress = (this.human * 100) /this.humanMax;
    } 
    else if (this.human <= this.humanMax) {         //Si les naissances dépassent la capacité d'hébergement mais qu'il reste de la place
      newBorn = this.humanMax - this.human          //Les naissances représentent l'espace disponible restant
      this.human = this.humanMax;                   //La population est mise au max
      this.freeWorkers = newBorn;                   //Les nouveaux travailleurs dispo sont ajoutés
      this.humanProd = newBorn;
      this.getDeathRating();
      this.humanProgress = (this.human * 100) /this.humanMax;
    };
  };

  youLoose() {
    this.router.navigate(["/defeat"]);
  };

  youLooseFood() {
    this.router.navigate(["/defeat2"]);
  };

  youWin() {
    this.router.navigate(["/victory"]);
  };

  consumption() {
    let elecConsumption = 0;
    this.getProductionCapacity() 

    this.cases.forEach(thisCase => {
      if (thisCase.building && thisCase.building.isActivateByRoad === true && thisCase.building.isActivateByEnergy === true) {
        switch(thisCase.building.name){
          case 'Farm':
            elecConsumption += (thisCase.building.elecConsumption * (thisCase.building.nbWorkers/thisCase.building.maxWorker)); // Consommation d'energy propotionnelle au nombre de Worker
            break;
          case 'Extractor':
            elecConsumption += (thisCase.building.elecConsumption * (thisCase.building.nbWorkers/thisCase.building.maxWorker));// Consommation d'energy propotionnelle au nombre de Worker
            break;
          case 'Dormitory':
            elecConsumption += thisCase.building.elecConsumption;
            break;
        };
      }; 
    });
    this.foodConsumption = (this.human * 1)
    this.elecConsumption = Math.ceil(elecConsumption/31);
    
    if ((this.energy -= this.elecConsumption) < 0 ) {
      this.energy = 0;
      this.energyProgress = (this.energy * 100) /this.energyMax;
    } else {
      this.energyProgress = (this.energy * 100) /this.energyMax;
    };
    if (this.energy === 0) {
      this.disableBuilding();
    };
    if (this.energy > 0) {
      this.enableBuilding()
    };

    if ((this.food -= this.foodConsumption) < 0 ) {
      this.food = 0;
      this.foodProgress = (this.food * 100) /this.foodMax;
    } else {
      this.foodProgress = (this.food * 100) /this.foodMax;
    };
    if (this.human === 0) {                                       //Conséquence si nb Himain = 0
      this.youLoose();
    };
    if (this.food === 0) {                                        //Conséquence d'une insuffisance de food
      let DailyDeath = Math.ceil((0.2 * this.human));
      this.human -= DailyDeath;
      this.totalDeadPeople += DailyDeath;
      this.getDeathRating();
      this.humanProgress = (this.human * 100) /this.humanMax;
    }
  };

  capacityDead(){
    console.log(this.human)
    console.log(this.humanMax)
    if (this.humanMax < this.human) {
      this.dead = (this.humanMax - this.human);
      console.log(this.dead)
    };
  };
  
  getDeathRating() {
    this.popTotal = this.human + this.totalDeadPeople;
    this.deathRating = Math.floor((this.totalDeadPeople*100)/(this.popTotal));
    if (this.deathRating >= (20/100)) {
      this.youLoose();
    };
  };



  // desactivation aléatoire des batiment de production
  disableBuilding() {
    let temporaryArray = [];
    this.cases.forEach( cell => {
      if (cell.building && cell.building.name != 'Dormitory' && cell.building.name != 'Horizontal road' && cell.building.name != 'Vertical road' && cell.building.name != 'Carrefour' && cell.building.isActivateByEnergy === true) {
        temporaryArray.push(cell);
      };
    });
    if (temporaryArray && temporaryArray.length) {
      console.log(temporaryArray)
      let randomIndex = Math.floor(Math.random() * (temporaryArray.length));
      console.log(randomIndex)
      this.cases[this.cases.indexOf(temporaryArray[randomIndex])].building.isActivateByEnergy = false;
    };
    this.getCapacity();
  };

  enableBuilding () {
    let temporaryArray = [];
    this.cases.forEach( cell => {
      if (cell.building != undefined && cell.building.name != 'Dormitory' && cell.building.name != 'Horizontal road' && cell.building.name != 'Vertical road' && cell.building.name != 'Carrefour' && cell.building.isActivateByEnergy === false) {
        temporaryArray.push(cell);
      };
    });
    if (temporaryArray && temporaryArray.length) {
      let randomIndex = Math.floor(Math.random() * (temporaryArray.length));
      this.cases[this.cases.indexOf(temporaryArray[randomIndex])].building.isActivateByEnergy = true;
    }
    this.getCapacity();
  }


  // upgrade des batiments
  upgradeBuiding(cell: Case) {
    if (this.cases[this.cases.indexOf(cell)].building.upgradeCost <= this.iron){
      this.iron -= this.cases[this.cases.indexOf(cell)].building.upgradeCost;
      this.cases[this.cases.indexOf(cell)].building.level += 1;
      this.cases[this.cases.indexOf(cell)].building.maxCapacity = Math.ceil(this.cases[this.cases.indexOf(cell)].building.maxCapacity * 120/100);
      this.cases[this.cases.indexOf(cell)].building.production = Math.ceil(this.cases[this.cases.indexOf(cell)].building.production * 120/100);
      this.cases[this.cases.indexOf(cell)].building.foodConsumption = Math.ceil(this.cases[this.cases.indexOf(cell)].building.foodConsumption * 110/100);
      this.cases[this.cases.indexOf(cell)].building.elecConsumption = Math.ceil(this.cases[this.cases.indexOf(cell)].building.elecConsumption * 110/100);
      this.cases[this.cases.indexOf(cell)].building.cost = Math.ceil(this.cases[this.cases.indexOf(cell)].building.cost * 120/100);
      this.cases[this.cases.indexOf(cell)].building.upgradeCost = Math.ceil(this.cases[this.cases.indexOf(cell)].building.upgradeCost * 150/100);
      this.getCapacity();
      this.getProductionCapacity();
    };
  };


  // Activation des batiments si à coté d'une route
  nextToRoad(cell: Case){
    let xPosRef = cell.xPosition;
    let yPosRef = cell.yPosition;

    if (this.cases.find(square => square.xPosition === xPosRef -1 && square.yPosition === yPosRef - 1).building){
      if(this.cases.find(square => square.xPosition === xPosRef -1 && square.yPosition === yPosRef - 1).building.isRoad === true) {
        cell.building.isActivateByRoad = true;
      };
    };
    if (this.cases.find(square => square.xPosition === xPosRef -1 && square.yPosition === yPosRef).building){
      if (this.cases.find(square => square.xPosition === xPosRef -1 && square.yPosition === yPosRef).building.isRoad === true){
        cell.building.isActivateByRoad= true;
      };
    };
    if (this.cases.find(square => square.xPosition === xPosRef -1 && square.yPosition === yPosRef + 1).building) {
      if (this.cases.find(square => square.xPosition === xPosRef -1 && square.yPosition === yPosRef + 1).building.isRoad === true){
        cell.building.isActivateByRoad= true;
      };
    };
    if (this.cases.find(square => square.xPosition === xPosRef && square.yPosition === yPosRef - 1).building) {
      if (this.cases.find(square => square.xPosition === xPosRef && square.yPosition === yPosRef - 1).building.isRoad === true) {
        cell.building.isActivateByRoad= true;
      };
    };
    if (this.cases.find(square => square.xPosition === xPosRef && square.yPosition === yPosRef + 1).building) {
      if (this.cases.find(square => square.xPosition === xPosRef && square.yPosition === yPosRef + 1).building.isRoad === true) {
        cell.building.isActivateByRoad= true;
      };
    };
    if (this.cases.find(square => square.xPosition === xPosRef +1 && square.yPosition === yPosRef - 1).building) {
      if (this.cases.find(square => square.xPosition === xPosRef +1 && square.yPosition === yPosRef - 1).building.isRoad === true) {
        cell.building.isActivateByRoad= true;
      };
    };
    if (this.cases.find(square => square.xPosition === xPosRef +1 && square.yPosition === yPosRef).building) {
      if (this.cases.find(square => square.xPosition === xPosRef +1 && square.yPosition === yPosRef).building.isRoad === true) {
        cell.building.isActivateByRoad= true;
      };
    };
    if (this.cases.find(square => square.xPosition === xPosRef +1 && square.yPosition === yPosRef +1).building) {
      if (this.cases.find(square => square.xPosition === xPosRef +1 && square.yPosition === yPosRef +1).building.isRoad === true) {
        cell.building.isActivateByRoad= true;
      };
    };
  };

  // mapping des batiments de prod pour appel de la fonction d'activation des batiments si à coté d'une route
  mappingRoad(){

    this.cases.forEach(element => {
      if(element.building
      && element.building.name != 'Vertical road' 
      && element.building.name != 'Crossroad'
      && element.building.name != 'Horizontal road') {
        this.nextToRoad(element)
      };
    });
  };

};
