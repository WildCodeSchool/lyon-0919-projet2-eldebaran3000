import { Injectable } from '@angular/core';
import { Building } from 'src/app/shared/building';



@Injectable({
    providedIn: 'root'
})
export class BuildingService {
    clickMenu: boolean = false;
    clickFleche : boolean = true; 
    buildings: Building[] =
        [{
            level : 1,
            name : 'Farm',
            maxCapacity : 1080,
            production : 1080,
            foodConsumption : undefined,
            elecConsumption: 36,
            cost: 27,
            isRoad: false,
            nbWorkers : 1,
            minWorker : 1,
            maxWorker : 36,
            imageOn : "/assets/fermeHydro.png",
            imageOff : "/assets/fermeHydroOff.png",
            deleteIron: 10,
            isActivateByRoad  :  false,
            isActivateByEnergy : true,
            upgradeCost : 54,
        },
        {
            level : 1,
            name: 'Extractor',
            maxCapacity : 270,
            production: 108,
            foodConsumption: undefined,
            elecConsumption: 36,
            cost: 27,
            isRoad: false,
            nbWorkers : 1,
            minWorker: 1,
            maxWorker: 36,
            imageOn : "/assets/extracteurMinerai.png",
            imageOff : "/assets/extracteurMineraiOff.png",
            deleteIron: 10,
            isActivateByRoad  :  false,
            isActivateByEnergy : true,
            upgradeCost : 54,
        },
        {
            level : 1,
            name: 'Power Station',
            maxCapacity : 480,
            production: 2880,
            foodConsumption: undefined,
            elecConsumption: undefined,
            cost: 36,
            isRoad: false,
            nbWorkers : 1,
            minWorker: 1,
            maxWorker: 48,
            imageOn : "/assets/powerStation.png",
            imageOff : "/assets/powerStationOff.png",
            deleteIron: 15,
            isActivateByRoad  : false,
            isActivateByEnergy : true,
            upgradeCost : 72,
        },
        {
            level : 1,
            name: 'Dormitory',
            maxCapacity : 76,
            production: undefined,
            foodConsumption: undefined,
            elecConsumption: 48,
            cost: 36,
            isRoad: false,
            nbWorkers : undefined,
            minWorker: 0,
            maxWorker: undefined,
            imageOn : "/assets/dortoir.png",
            imageOff : "/assets/dortoir.png",
            deleteIron: 15,
            isActivateByRoad  :  true,
            isActivateByEnergy : true,
            upgradeCost : 72,
        },
        {
            name: 'Vertical road',
            level : 1,
            maxCapacity : undefined,
            production: undefined,
            foodConsumption: undefined,
            elecConsumption: undefined,
            cost: 5,
            isRoad: true,
            nbWorkers : 0,
            minWorker: 0,
            maxWorker: undefined,
            imageOn : "/assets/road.png",
            imageOff :"/assets/road.png",
            deleteIron: 1,
            isActivateByRoad : false,
            isActivateByEnergy : true,
            upgradeCost : 0,
        },
        
        {
            name: 'Horizontal road',
            level : 1,
            maxCapacity : undefined,
            production: undefined,
            foodConsumption: undefined,
            elecConsumption: undefined,
            cost: 5,
            isRoad: true,
            nbWorkers : 0,
            minWorker: 0,
            maxWorker: undefined,
            imageOn : "/assets/carrefour.png",
            imageOff :"/assets/carrefour.png",
            deleteIron: 1,
            isActivateByRoad  :  false,
            isActivateByEnergy : true,
            upgradeCost : 0,
         },
         {
            name: 'Crossroad',
            level : 1,
            maxCapacity : undefined,
            production: undefined,
            foodConsumption: undefined,
            elecConsumption: undefined,
            cost: 5,
            isRoad: true,
            nbWorkers : 0,
            minWorker: 0,
            maxWorker: undefined,
            imageOn : "/assets/roadHorizontal.png",
            imageOff :"/assets/roadHorizontal.png",
            deleteIron: 1,
            isActivateByRoad :  false,
            isActivateByEnergy : true,
            upgradeCost : 0,
        },
        ];

    constructor() { }

    clickAppear() {
        this.clickMenu = !this.clickMenu;
        this.clickFleche = !this.clickFleche;
    }


}

