export  class Building {
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


    constructor (name : string, cost : number, image:string) {
        this.name = name;
        this.cost = cost;
        this.image = image;
    }
};
