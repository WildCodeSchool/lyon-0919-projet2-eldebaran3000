import { Injectable } from '@angular/core';
import { Time } from './time';
import { GameService } from 'src/app/shared/game.service';

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



  constructor(private gameService : GameService) { }

   play(){
     this.intervalId = setInterval(() => {
      if (!this.pause) {
        this.timer.day +=1;
        this.gameService.consumption();
        if (this.timer.day === 31) {
          this.timer.month +=1;
          this.timer.day = 1;
          this.gameService.productionBar();
          this.shipPosition -= 6.75;
          if (this.shipPosition <= 40) {
            this.shipPosition = 850;
          };
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
    if ((this.timer.year - 2800) % 10 === 0 ) {
    this.gameService.human += 200;
    this.gameService.freeWorkers += 200;
    this.gameService.popEarth -= 200;
    }
  }



  /*Fonction appelant les données stockées dans le GameService pour mettre à jour le visuel,
que ce soit les bars ou les données en dessous.*/



}
