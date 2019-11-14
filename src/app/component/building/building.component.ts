import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Building } from '../../shared/building'
import { GameService } from 'src/app/shared/game.service';
import { BuildingService } from 'src/app/shared/building.service';



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


    constructor(private gameService : GameService,
                private buildingService : BuildingService) { }

    ngOnInit() {};

    onMouseEnter() {
        this.showProperties = true;
    };

    onMouseLeave() {
        this.showProperties = false;
    };


/**
 * Construction des batiments (étape 1/4)
 * Méthode appelée au clic dans le html du composant (clic sur un batiment du menu construction) :
 * Stock le batiment cliqué (sous la forme d'un objet de type Building) dans le gameService (buildingToConstruct).
 * Referme le menu déroulant
 */
    onBuildMode_selection(building : Building) {
        if (this.gameService.freeWorkers > 0) {
            this.gameService.buildingToConstruct = {...building};
            this.buildingService.clickAppear();
        }

    }
/**
 * -----------------Étape 2 dans game.service.ts--------------------------------------------------------
 */

}
