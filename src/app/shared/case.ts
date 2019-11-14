import { Building } from './building';

export class Case {
    isOccuped : boolean;
    isOnConstructMode : boolean;
    building : Building;
    xPosition: number;
    yPosition: number; 

    constructor(isOccuped : boolean, isOnConstructMode : boolean, xPosition: number, yPosition: number){
        this.isOccuped = isOccuped;
        this.isOnConstructMode = isOnConstructMode;
        this.xPosition = xPosition;
        this.yPosition = yPosition;
    }

}
