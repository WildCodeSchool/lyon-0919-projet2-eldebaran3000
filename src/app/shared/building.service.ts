import { Injectable } from '@angular/core';
import { Building } from 'src/app/shared/building';



@Injectable({
    providedIn: 'root'
})
export class BuildingService {
    clickMenu: boolean = false;
    buildings: Building[] =
        [{
            name : 'Farm',
            maxCapacity : 1080,
            production : 108,
            foodConsumption: 0,
            elecConsumption: 36,
            cost: 27,
            nextRoad: false,
            nbWorkers : 1,
            minWorker : 1,
            maxWorker : 36,
            image : "/assets/fermeHydro.png",
        },
        {
            name: 'Extractor',
            maxCapacity : 270,
            production: 108,
            foodConsumption: 0,
            elecConsumption: 36,
            cost: 27,
            nextRoad: false,
            nbWorkers : 1,
            minWorker: 1,
            maxWorker: 36,
            image : "/assets/extracteurMinerai.png",
        },
        {
            name: 'Power Station',
            maxCapacity : 480,
            production: 144,
            foodConsumption: 0,
            elecConsumption: 0,
            cost: 36,
            nextRoad: false,
            nbWorkers : 1,
            minWorker: 1,
            maxWorker: 48,
            image : "/assets/powerStation.png",
        },
        {
            name: 'Dormitory',
            maxCapacity : 76,
            production: 0,
            foodConsumption: 144,
            elecConsumption: 48,
            cost: 36,
            nextRoad: false,
            nbWorkers : 0,
            minWorker: 0,
            maxWorker: 76,
            image : "/assets/dortoir.png",
        },
        {
            name: 'Road',
            maxCapacity : 0,
            production: 0,
            foodConsumption: 0,
            elecConsumption: 0,
            cost: 5,
            nextRoad: false,
            nbWorkers : 0,
            minWorker: 0,
            maxWorker: 0,
            image : "/assets/Road.jpg",
        }

        ];

    constructor() { }

    clickAppear() {
        this.clickMenu = !this.clickMenu;
    }


}

