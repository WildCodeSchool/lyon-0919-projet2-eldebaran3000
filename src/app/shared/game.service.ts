import { Injectable } from '@angular/core';
import { Building } from './building';
import { Case } from './case';

@Injectable({
  providedIn: 'root'
})
export class GameService {

/*  initialisation du tableau contenant les objets disposés sur la grille (1 casou = 1cellule) */
  cases : Case[] = [];

/** Construction des batiments (étape 2/4) :
*   Initialisation d'un objet temporaire contenant le batiment à construire.
*/
  buildingToConstruct : Building;
/* --------------Étape 3 dans cellule.component.ts------------------------- */

  constructor() { }

  /** Création de la grille  */
  caseBuilder(){
    for(let l = 1 ; l <= 20 ; l++){
      for(let c = 1 ; c <= 20 ; c++){
        let index = (l * c) - 1
        let casou = new Case (c, l, "G", false, false, index);
        this.cases.push(casou);
      }
    }
    return this.cases;
  }
  

/** Construction des batiments (étape 4/4) :
*   On ajoute au tableau d'objet contenant les cellules de la grille (cases), l'objet stockée dans "buildingToConstruct"
*   dans la cellule sélectionnée sur la grille.
*   Pour cela, on récupère l'index de la cellule séléctionnée : this.cases.indexOf(cell)
*   Puis on ajoute à cet objet dans l'attribut building ... :  this.cases[...].building 
*   ... l'objet à construire : ... = this.buildingToConstruct
*/
  onBuildMode_Build(cell : Case){
    this.cases[this.cases.indexOf(cell)].building = this.buildingToConstruct
  }
/* ---------------------------------------FIN--------------------------------------------------- */

}


