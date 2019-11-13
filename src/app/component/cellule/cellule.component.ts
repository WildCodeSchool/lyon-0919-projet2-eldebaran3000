import { Component, OnInit, Input } from '@angular/core';
import { Case } from 'src/app/shared/case';
import { GameService } from 'src/app/shared/game.service';


@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {
  
  settingMode : boolean = false;


  @Input() displayCell : Case;

  constructor(private gameService : GameService) { };

  ngOnInit() {
  };



  /** Construction des batiments (étape 3/4) :
   *  Méthode appelée au clic dans le HTML (cellule.component.html) transmettant la cellule sélectionnée de la grille.
   *  Si un batiment à construire n'a pas été selectionné et que la case cliquée contient un batiment (isOccuped = true)
   *  => settingMode s'active pour afficher le menu de setting de la prod du batiment.
   *  Sinon fait appel à une méthode située dans le game.service.ts car le batiments à construire y est stocké (buildingToConstruct).
   */
  onBuildMode_placement(cell : Case) {
    if (this.gameService.buildingToConstruct === undefined && this.gameService.cases[this.gameService.cases.indexOf(cell)].isOccuped === true){
      this.settingMode = !this.settingMode
    } 
    else if (this.gameService.buildingToConstruct && this.gameService.cases[this.gameService.cases.indexOf(cell)].isOccuped === false){
      this.gameService.onBuildMode_Build(cell)
    }
  }
  /* ----------------étape 4 dans game.service.ts--------------------------------------- */



}
