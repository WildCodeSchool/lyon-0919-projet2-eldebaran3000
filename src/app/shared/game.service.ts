import { Injectable } from '@angular/core';
import { Building } from './building';
import { Case } from './case';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  // initialisation du tableau contenant les objets disposés sur la grille (au départ que des casou : cellule)
  cases : Case[] = [];


  constructor() { }


  buildings : Building[];
  buildingToConstruct : Building;


  // méthode appelée dans le building.component.ts : récupère l'objet (batiment) cliqué à construire et le stock dans "buildingToConstruct"
  getPickUpBuilding (building : Building) {
    this.buildingToConstruct = building;
  }

  getPlaceToBuild(casou : Case){
    console.log(casou)
    this.cases[this.cases.indexOf(casou)].building = this.buildingToConstruct
    console.log(this.cases[casou.index].building)
  }

  caseBuilder(){
    for(let l = 1 ; l <= 50 ; l++){
      for(let c = 1 ; c <= 50 ; c++){
        let index = (l * c) - 1
        let casou = new Case (c, l, "G", false, false, index);
        this.cases.push(casou);
      }
    }
  return this.cases;
  }



}


