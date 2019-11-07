import { Injectable } from '@angular/core';
import { Building } from './building';
import { Case } from './case';

@Injectable({
  providedIn: 'root'
})
export class GameService {

/*  initialisation du tableau contenant les objets disposés sur la grille (1 casou = 1cellule) */
  cases : Case[] = [];
  energyMax: number = 0;
  foodMax: number = 0;
  ironMax: number = 100;
  humanMax: number = 0;
  energyProd: number = 0;
  foodProd: number = 0;
  ironProd: number = 0;
  energy: number = 0;
  food: number = 0;
  human: number = 0;
  iron: number = 10;
  foodConsumption: number;
  elecConsumption: number;

  /** Construction des batiments (étape 2/4) :
  *   Initialisation d'un objet temporaire contenant le batiment à construire.
  */
  buildingToConstruct: Building;
  /* --------------Étape 3 dans cellule.component.ts------------------------- */

  constructor() { }

  /** Création de la grille  */
  caseBuilder(){
    for(let l = 1 ; l <= 20 ; l++){
      for(let c = 1 ; c <= 20 ; c++){
        let index = (l * c) - 1;
        let casou = new Case (false, false);
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
    if (this.buildingToConstruct.cost <= this.iron) {
      this.iron -= this.buildingToConstruct.cost
      this.cases[this.cases.indexOf(cell)].building = this.buildingToConstruct;
      this.cases[this.cases.indexOf(cell)].isOccuped = true
      this.buildingToConstruct = undefined;
      this.getCapacity()
      
    };
  }
  /* ---------------------------------------FIN--------------------------------------------------- */

//Stockage des capacités max de chaque case

getCapacity () {
  let energyMax = 0;
  let foodMax = 0;
  let ironMax = 0;
  let humanMax = 0;
    this.cases.forEach(thisCase => {
      if (thisCase.building) {
        switch(thisCase.building.name){
          case 'Power Station':
            energyMax += thisCase.building.productionCapacity;
            break;
          case 'Farm':
            foodMax += thisCase.building.productionCapacity;
            break;
          case 'Extractor':
            ironMax += thisCase.building.productionCapacity;
            break;
          case 'Dormitory':
            humanMax += thisCase.building.productionCapacity;
            break;
        };
      }; 
    });
    this.energyMax = energyMax;
    this.foodMax = foodMax;
    this.ironMax = ironMax;
    this.humanMax = humanMax;
  };

//Récupération et stockage des prod de chaque cas

  getProductionCapacity() {
    let energyProd = 0;
    let foodProd = 0;
    let ironProd = 0;
    this.cases.forEach(thisCase => {
      if (thisCase.building) {
        switch(thisCase.building.name){
          case 'Power Station':
            energyProd += thisCase.building.productionSpeed;
            break;
          case 'Farm':
            foodProd += thisCase.building.productionSpeed;
            energyProd -= thisCase.building.elecConsumption;
            break;
          case 'Extractor':
            ironProd += thisCase.building.productionSpeed;
            energyProd -= thisCase.building.elecConsumption;
            break;
          case 'Dormitory':
            energyProd -= thisCase.building.elecConsumption;
            foodProd -= thisCase.building.foodConsumption;
        };
      }; 
    });
    this.energyProd = energyProd;
    this.foodProd = foodProd;
    this.ironProd = ironProd;
  };





}