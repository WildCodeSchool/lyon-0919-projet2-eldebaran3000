import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Building } from '../../shared/building'
import { GameService } from 'src/app/shared/game.service';



@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
    @Input() building: Building;
    @Output() buildingShowEvent = new EventEmitter<Building>();
    showProperties: boolean = false;

    constructor(private gameService : GameService) { }

    ngOnInit() {}

    onMouseEnter() {;
        this.showProperties = true;
    }

    onMouseLeave() {
        this.showProperties = false;
    }
/*
    onBuildModePickUp(building : Building){
        this.gameService.onBuildModePickUp(building);
    }
  */
}
