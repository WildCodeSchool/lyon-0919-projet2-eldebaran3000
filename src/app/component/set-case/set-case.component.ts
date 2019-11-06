import { Component, OnInit, Input } from '@angular/core';
import { Case } from 'src/app/shared/case';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-set-case',
  templateUrl: './set-case.component.html',
  styleUrls: ['./set-case.component.scss']
})
export class SetCaseComponent implements OnInit {



  @Input() displayCell : Case;

  constructor(private gameService : GameService) { }

  ngOnInit() {
    
  }

  addWorker() {   
    if ( this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.humanCapicity < this.gameService[this.gameService.cases.indexOf(this.displayCell)].building.maxWorker) {
      this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.humanCapicity += 1;
      
    }

  }

  removeWorker(){
    this.gameService.cases[this.gameService.cases.indexOf(this.displayCell)].building.humanCapicity -= 1;
  }

}
