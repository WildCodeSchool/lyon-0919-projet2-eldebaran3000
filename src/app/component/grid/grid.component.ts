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
  this.cases = this.gameService.caseBuilder();
  }
}
