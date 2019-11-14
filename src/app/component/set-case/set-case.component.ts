import { Component, OnInit, Input } from '@angular/core';
import { Case } from 'src/app/shared/case';
import { GameService } from 'src/app/shared/game.service';
import { Building } from 'src/app/shared/building';
import { BuildingService } from 'src/app/shared/building.service';

@Component({
  selector: 'app-set-case',
  templateUrl: './set-case.component.html',
  styleUrls: ['./set-case.component.scss']
})
export class SetCaseComponent implements OnInit {
  


  @Input() displayCell : Case;

  building : Building
  

  constructor(private gameService : GameService) { }

  ngOnInit() {
   }

  addWorker() {
    if ( this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers < this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.maxWorker && this.gameService.freeWorkers > 0) {
      this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers += 1;
      this.gameService.freeWorkers -= 1;
      this.gameService.getProductionCapacity();
    };
    if (this.gameService.freeWorkers === 0) {
      this.gameService.minWorkerColor = "red";
    }
  };

  removeWorker(){
    if ( this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers > this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.minWorker) {
      this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers -= 1;
      this.gameService.freeWorkers +=1;
      this.gameService.getProductionCapacity();
    };
    if (this.gameService.freeWorkers > 0 ) {
      this.gameService.minWorkerColor = "green";
    }
  };
  upgradeBuilding(){
    this.gameService.upgradeBuiding(this.displayCell);
  }

  destroyBuilding() {
    this.gameService.freeWorkers += this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.nbWorkers 
    this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)] = new Case (false,false, this.displayCell.xPosition, this.displayCell.yPosition)
    this.gameService.getCapacity()
    if (this.gameService.freeWorkers > 0 ) {
      this.gameService.minWorkerColor = "green";
      this.gameService.iron = this.gameService.iron + this.displayCell.building.deleteIron;
    };
    
  };

}
