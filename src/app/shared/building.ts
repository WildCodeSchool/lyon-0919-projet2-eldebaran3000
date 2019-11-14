export  class Building {
    level: number;
    name: string;
    maxCapacity: number;
    production: number;
    foodConsumption: number;
    elecConsumption: number;
    cost:number;
    nextRoad: boolean;
    nbWorkers: number;
    minWorker: number;
    maxWorker: number;
    image: string;
    deleteIron: number;
    upgradeCost: number;


    constructor (name : string, cost : number, image:string, deleteIron: number) {
        this.name = name;
        this.cost = cost;
        this.image = image;
        this.deleteIron = deleteIron;
    }
};
