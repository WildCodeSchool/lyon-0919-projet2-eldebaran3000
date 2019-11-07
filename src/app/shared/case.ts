import { Building } from './building';

export class Case {
    isOccuped : boolean;
    isOnConstructMode : boolean;
    building : Building;

    constructor(isOccuped : boolean, isOnConstructMode : boolean,){
        this.isOccuped = isOccuped;
        this.isOnConstructMode = isOnConstructMode;
    }

}
