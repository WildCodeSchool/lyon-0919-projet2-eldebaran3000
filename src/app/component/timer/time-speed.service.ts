import { Injectable } from '@angular/core';
import { Time } from './time';
import { GameService } from 'src/app/shared/game.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TimeSpeedService {
  clockSpeedDefault: number = 1000;
  clockSpeed: number = this.clockSpeedDefault;
  pause: boolean = false;
  intervalId: any;
  timer: Time = {
    day: 1,
    month: 1,
    year: 2800,
  }
  fastSpeed: number = this.clockSpeed / 10;

  //Travel Bar
  travelValue: number = 0;
  value = this.travelValue;
  shipPosition: number = 850;



  constructor(private gameService : GameService, private router: Router) { }

   play(){
     this.intervalId = setInterval(() => {
      if (!this.pause) {
        this.timer.day +=1;
        this.shipPosition -= 2.25;
        if (this.shipPosition <= 40) {
          this.shipPosition = 850;
        };
        this.gameService.consumption();
        if (this.timer.day === 31) {
          this.timer.month +=1;
          this.timer.day = 1;
          this.gameService.productionBar();
        };
        if (this.timer.month === 13) {
          this.timer.year += 1;
          this.timer.month = 1;
          this.travelValue += 1.67;
          this.gameService.getPopulation()
          if (this.travelValue >= 100) {
            this.travelValue = 0;
          };
          this.value = this.travelValue;
          this.getNavettePop()
          return this.value, this.shipPosition;
        };
      };
    }, this.clockSpeed);
  }
  
  setPause(pause: boolean) {
    this.pause = pause;
    clearInterval(this.intervalId);
    this.clockSpeed = this.clockSpeedDefault;
    this.play();

  }

  fastForward() {
    clearInterval(this.intervalId);
    this.intervalId = undefined;
    this.clockSpeed = this.clockSpeed / 5;
    this.play();
  }


  getNavettePop() {
    if ((this.timer.year - 2800) % 1 === 0 ) {
      this.gameService.human += 200;
      this.gameService.freeWorkers += 200;
      this.gameService.popEarth -= 200;
      this.gameService.humanProgress = (this.gameService.human * 100) /this.gameService.humanMax;
      if (this.gameService.popEarth === 0) {
        this.gameService.youWin();
      };
    };
  };

  /*Fonction appelant les données stockées dans le GameService pour mettre à jour le visuel,
que ce soit les bars ou les données en dessous.*/

replay(){
  this.gameService.energyMax = 0;
  this.gameService.foodMax = 0;
  this.gameService.ironMax= 0;
  this.gameService.humanMax = 0;
  this.gameService.humanProd = 1;
  this.gameService.energyProd = 0;
  this.gameService.foodProd = 0;
  this.gameService.ironProd = 0;
  this.gameService.energy = 1500;
  this.gameService.food = 10000;
  this.gameService.human = 10;
  this.gameService.iron = 1500;
  this.timer = {
    day: 1,
    month: 1,
    year: 2800,
  };
  this.setPause(true)
  this.gameService.cases = [];
  this.gameService.caseBuilder();
  this.shipPosition = 850;
  this.router.navigate([""])
}


}
