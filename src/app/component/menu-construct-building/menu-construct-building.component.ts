import { Component, OnInit} from '@angular/core';

import { BuildingService } from '../../shared/building.service'
import { Building } from '../../shared/building';



@Component({
    selector: 'app-menu-construct-building',
    templateUrl: './menu-construct-building.component.html',
    styleUrls: ['./menu-construct-building.component.scss']
})
export class MenuConstructBuildingComponent implements OnInit {
    buildings: Building[];
    clickMenu: boolean;
      
    constructor(private buildingService: BuildingService) { }


    ngOnInit() {

    }
    clickAppear() {
        this.buildingService.clickAppear();
        this.buildings = this.buildingService.buildings;
    }
   
    
  

}