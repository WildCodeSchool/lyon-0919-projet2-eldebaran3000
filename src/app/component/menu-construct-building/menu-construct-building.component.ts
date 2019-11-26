import { Component, OnInit} from '@angular/core';

import { BuildingService } from '../../shared/building.service'
import { Building } from '../../shared/building';
import { GameService } from 'src/app/shared/game.service';



@Component({
    selector: 'app-menu-construct-building',
    templateUrl: './menu-construct-building.component.html',
    styleUrls: ['./menu-construct-building.component.scss']
})
export class MenuConstructBuildingComponent implements OnInit {
    buildings: Building[];
    clickMenu: boolean;
      
    constructor(private buildingService: BuildingService,
                private gameService : GameService) { }


    ngOnInit() {
       // this.startingBuilding()
    }
    clickAppear() {
        this.buildingService.clickAppear();
        this.buildings = this.buildingService.buildings;
    }
   
  

}