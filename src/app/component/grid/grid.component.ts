import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/shared/case';
import { GameService } from 'src/app/shared/game.service';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  cases: Case[] = [];
  
  constructor(private gameService : GameService) {}

  ngOnInit() {
    this.caseBuilder()
  }

  caseBuilder(){
    for(let l = 1 ; l <= 50 ; l++){
      for(let c = 1 ; c <= 50 ; c++){
        let casou = new Case(c, l, "G", false, false);
        this.cases.push(casou);
      }
    }
  return this.cases;
  }
}
