import { Building } from './building';

export class Case {
    
    xPos: number;
    yPos: number;
    type : string
    isOccuped : boolean;
    isOnConstructMode : boolean;
    index : number;
    building : Building;

    constructor(xPos : number, yPos : number, type: string,isOccuped : boolean, isOnConstructMode : boolean, index:number){
        this.xPos = xPos;
        this.yPos = yPos;
        this.type = type;
        this.isOccuped = isOccuped;
        this.isOnConstructMode = isOnConstructMode;
        this.index = index;
    }

}
