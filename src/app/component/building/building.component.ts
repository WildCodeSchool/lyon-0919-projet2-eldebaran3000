import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Building } from '../../shared/building'
import { GameService } from 'src/app/shared/game.service';



@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
    @Input() building: Building;
    @Output() buildingShowEvent = new EventEmitter<Building>();
    showProperties: boolean = false;
    unshowProperties: boolean= false;


    constructor(private gameService : GameService) { }

    ngOnInit() {}

    onMouseEnter() {;
        this.showProperties = true;
    }

    onMouseLeave() {
        this.showProperties = false;
    }


/**
 * Construction des batiments (étape 1/4) 
 * Méthode appelée au clic dans le html du composant (clic sur un batiment du menu construction) : 
 * Stock le batiment cliqué (sous la forme d'un objet de type Building) dans le gameService (buildingToConstruct).
 */
    onBuildMode_selection(building : Building) {
        this.gameService.buildingToConstruct = building
    }
/**
 * -----------------Étape 2 dans game.service.ts--------------------------------------------------------
 */ 
  
}
