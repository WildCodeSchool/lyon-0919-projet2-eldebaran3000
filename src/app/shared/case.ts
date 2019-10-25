export class Case {
    
    xPos: number;
    yPos: number;
    type : string
    isOccuped : boolean;
    isOnConstructMode : boolean;

    constructor(xPos : number, yPos : number, type: string,isOccuped : boolean, isOnConstructMode : boolean){
        this.xPos = xPos;
        this.yPos = yPos;
        this.type = type;
        this.isOccuped = isOccuped;
        this.isOnConstructMode = isOnConstructMode
    }

}
