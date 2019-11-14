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
            production : 108,
            foodConsumption : undefined,
            elecConsumption: 36,
            cost: 27,
            nextRoad: false,
            nbWorkers : 1,
            minWorker : 1,
            maxWorker : 36,
            image : "/assets/fermeHydro.png",
            deleteIron: 10,
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
            nextRoad: false,
            nbWorkers : 1,
            minWorker: 1,
            maxWorker: 36,
            image : "/assets/extracteurMinerai.png",
            deleteIron: 10,
            upgradeCost : 54,
        },
        {
            level : 1,
            name: 'Power Station',
            maxCapacity : 480,
            production: 144,
            foodConsumption: undefined,
            elecConsumption: undefined,
            cost: 36,
            nextRoad: false,
            nbWorkers : 1,
            minWorker: 1,
            maxWorker: 48,
            image : "/assets/powerStation.png",
            deleteIron: 15,
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
            nextRoad: false,
            nbWorkers : undefined,
            minWorker: 0,
            maxWorker: undefined,
            image : "/assets/dortoir.png",
            deleteIron: 15,
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
            nextRoad: false,
            nbWorkers : undefined,
            minWorker: 0,
            maxWorker: undefined,
            image : "/assets/road.png",
            deleteIron: 1,
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
            nextRoad: false,
            nbWorkers : undefined,
            minWorker: 0,
            maxWorker: undefined,
            image : "/assets/carrefour.png",
            deleteIron: 1,
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
            nextRoad: false,
            nbWorkers : undefined,
            minWorker: 0,
            maxWorker: undefined,
            image : "/assets/roadHorizontal.png",
            deleteIron: 1
            upgradeCost : 0,
         },
        ];

    constructor() { }

    clickAppear() {
        this.clickMenu = !this.clickMenu;
        this.clickFleche = !this.clickFleche;
    }


}

