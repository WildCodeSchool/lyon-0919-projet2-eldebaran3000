import { Injectable } from '@angular/core';
import { Building } from 'src/app/shared/building';



@Injectable({
    providedIn: 'root'
})
export class BuildingService {
    clickMenu: boolean = false;
    buildings: Building[] =
        [{
            name: 'Farm',
            humanCapicity: 0,
            productionCapacity: 8,
            productionSpeed: 5,
            foodConsumption: 0,
            elecConsumption: 4,
            cost: 4,
            nextRoad: false,
            minWorker: 2,
            maxWorker: 10,
            image : "/assets/fermeHydro.png",
            index : 0
        },
        {
            name: 'Extractor',
            humanCapicity: 0,
            productionCapacity: 8,
            productionSpeed: 4,
            foodConsumption: 0,
            elecConsumption: 4,
            cost: 4,
            nextRoad: false,
            minWorker: 2,
            maxWorker: 10,
            image : "/assets/extracteurMinerai.png",
            index : 0
        },
        {
            name: 'Power Station',
            humanCapicity: 0,
            productionCapacity: 8,
            productionSpeed: 3,
            foodConsumption: 0,
            elecConsumption: 0,
            cost: 4,
            nextRoad: false,
            minWorker: 2,
            maxWorker: 10,
            image : "/assets/powerStation.png",
            index : 0
        },
        {
            name: 'Dormitory',
            humanCapicity: 10,
            productionCapacity: 8,
            productionSpeed: 2,
            foodConsumption: 6,
            elecConsumption: 6,
            cost: 4,
            nextRoad: false,
            minWorker: 0,
            maxWorker: 0,
            image : "/assets/dortoir.png",
            index : 0
        },
        {
            name: 'Road',
            humanCapicity: 0,
            productionCapacity: 0,
            productionSpeed: 0,
            foodConsumption: 0,
            elecConsumption: 0,
            cost: 6,
            nextRoad: false,
            minWorker: 0,
            maxWorker: 0,
            image : "",
            index : 0
        }

        ];

    constructor() { }

    clickAppear() {
        this.clickMenu = !this.clickMenu;
    }


}

