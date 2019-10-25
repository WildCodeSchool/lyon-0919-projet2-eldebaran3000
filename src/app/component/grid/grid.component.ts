import { Component, OnInit } from '@angular/core';
import { Case } from 'src/app/shared/case';


@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  cases: Case[] = [];
  
  constructor() {}

  ngOnInit() {
    this.caseBuilder()
  }

  caseBuilder(){
    for(let l = 1 ; l <= 50 ; l++){
      for(let c = 1 ; c <= 50 ; c++){
        let casou = new Case(c,l);
        this.cases.push(casou);
      }
    }
  return this.cases;
  }
}
