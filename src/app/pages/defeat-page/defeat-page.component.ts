import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameService } from 'src/app/shared/game.service';
import { TimeSpeedService } from 'src/app/component/timer/time-speed.service';

@Component({
  selector: 'app-defeat-page',
  templateUrl: './defeat-page.component.html',
  styleUrls: ['./defeat-page.component.scss']
})
export class DefeatPageComponent implements OnInit {

  constructor(private router : Router, private gameService : GameService, private timeSpeedService : TimeSpeedService) { }

  ngOnInit() {
  }

  replay(){
    this.router.navigate([""])
    this.gameService.energyMax = 0;
    this.gameService.foodMax = 0;
    this.gameService.ironMax= 0;
    this.gameService.humanMax = 0;
    this.gameService.humanProd = 1;
    this.gameService.energyProd = 0;
    this.gameService.foodProd = 0;
    this.gameService.ironProd = 0;
    this.gameService.energy = 10;
    this.gameService.food = 10;
    this.gameService.human = 10;
    this.gameService.iron = 100;
    this.timeSpeedService.timer = {
      day: 1,
      month: 1,
      year: 2800,
    };
    this.timeSpeedService.setPause(true)
    this.gameService.cases = [];
    this.gameService.caseBuilder();
    this.timeSpeedService.shipPosition = 850;
    
  }


}
