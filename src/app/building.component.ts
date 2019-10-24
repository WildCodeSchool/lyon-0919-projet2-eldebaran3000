import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { BuildingService } from './building.service'
import { Building } from './building'

@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
    @Input() building: Building;
    clickObject: boolean;

    constructor() { }

    ngOnInit() {}

  
}
