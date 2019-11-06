import { Component, OnInit, Input } from '@angular/core';
import { Case } from 'src/app/shared/case';
import { GameService } from 'src/app/shared/game.service';


@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {
  
  @Input() displayCell : Case;

  constructor(private gameService : GameService) { };

  ngOnInit() {
  };



  /** Construction des batiments (étape 3/4) :
   *  Méthode appelée au clic dans le HTML (cellule.component.html) transmettant la cellule sélectionnée de la grille.
   *  Fait appel à une méthode située dans le game.service.ts car le batiments à construire y est stocké (buildingToConstruct).
   */
  onBuildMode_placement(cell : Case) {
    this.gameService.onBuildMode_Build(cell);
  };
  /* ----------------étape 4 dans game.service.ts--------------------------------------- */



}
