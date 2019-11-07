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
  shipPosition: number = 250;

  //Stockbar
  energyProgress: number;
  foodProgress: number;
  ironProgress: number;

  constructor(private gameService : GameService) {
    this.play()
  }
   play(){
     this.intervalId = setInterval(() => {
      if (!this.pause) {
        this.timer.day +=1
        if (this.timer.day === 31) {
          this.timer.month +=1;
          this.timer.day = 1;
          this.productionBar();
        };
        if (this.timer.month === 13) {
          this.timer.year += 1;
          this.timer.month = 1;
          this.travelValue += 1.67;
            if (this.travelValue >= 100) {
              this.travelValue = 0;
            };
          this.shipPosition -= 3.5;
          if (this.shipPosition <= 40) {
            this.shipPosition = 250;
          }
          this.value = this.travelValue;
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

  /*Fonction appelant les données stockées dans le GameService pour mettre à jour le visuel,
que ce soit les bars ou les données en dessous.*/

  productionBar() {
      this.gameService.getProductionCapacity()
      if (this.gameService.energy <= this.gameService.energyMax - this.gameService.energyProd && this.gameService.energy >= 0 - this.gameService.energyProd ) {
        this.gameService.energy += this.gameService.energyProd;
        this.energyProgress = (this.gameService.energy * 100) /this.gameService.energyMax;
      } else if (this.gameService.energy >= this.gameService.energyMax - this.gameService.energyProd) 
        this.gameService.energy = this.gameService.energyMax;
        this.energyProgress = (this.gameService.energy * 100) /this.gameService.energyMax;
      if (this.gameService.food <= (this.gameService.foodMax - this.gameService.foodProd) && this.gameService.food >= 0 ) {
        this.gameService.food += this.gameService.foodProd;
        this.foodProgress = (this.gameService.food * 100) /this.gameService.foodMax;
      } else if (this.gameService.food >= this.gameService.foodMax - this.gameService.foodProd )
        this.gameService.food = this.gameService.foodMax;
        this.foodProgress = (this.gameService.food * 100) /this.gameService.foodMax;
      if (this.gameService.iron <= (this.gameService.ironMax - this.gameService.ironProd) && this.gameService.iron >= 0 ) {
        this.gameService.iron += this.gameService.ironProd;
        this.ironProgress = (this.gameService.iron * 100) /this.gameService.ironMax;
      } else if (this.gameService.iron >= this.gameService.ironMax - this.gameService.ironProd)
        this.gameService.iron = this.gameService.ironMax;
        this.ironProgress = (this.gameService.iron * 100) /this.gameService.ironMax;
      if (this.gameService.human <= this.gameService.humanMax && this.gameService.human >= 0) {
        this.gameService.human += 1;
      } else if (this.gameService.human >= this.gameService.humanMax)  
        this.gameService.human = this.gameService.humanMax;
  }

}
