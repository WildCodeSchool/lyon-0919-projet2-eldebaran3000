import { Component, OnInit, Input, Output,EventEmitter, HostListener} from '@angular/core';
import { BuildingService } from './building.service'
import { Building } from './building'

@Component({
    selector: 'app-building',
    templateUrl: './building.component.html',
    styleUrls: ['./building.component.scss']
})
export class BuildingComponent implements OnInit {
    @Input() building: Building;
    @Output() buildingShowEvent = new EventEmitter<Building>();
    showProperties: boolean = false;

    constructor() { }

    ngOnInit() {}

    onMouseEnter() {
        console.log('onMouseEnter');
        this.showProperties = true;
        console.log(this.showProperties);
    }

    onMouseLeave() {
        this.showProperties = false;
    }
  
}
