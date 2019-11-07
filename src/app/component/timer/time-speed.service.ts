import { Injectable } from '@angular/core';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class TimeSpeedService {
  //timer
  clockSpeedDefaut : number = 50
  clockSpeed: number = this.clockSpeedDefaut;
  pause: boolean = false;
  timer: Time = {
    day: 1,
    month: 1,
    year: 2800,
  }
  intervalId: any;
  fastSpeed: number = this.clockSpeed / 10;

  //Travel Bar
  travelValue: number = 0;
  value = this.travelValue;
  rightShip: number = 250;

  


  constructor() {
    this.play()
  }
   play(){
     this.intervalId = setInterval(() => {
      if (!this.pause) {
        this.timer.day +=1
        if (this.timer.day === 31) {
          this.timer.month +=1;
          this.timer.day = 1; 
        };
        if (this.timer.month === 13) {
          this.timer.year += 1;
          this.timer.month = 1;
          this.travelValue += 1.67;
            if (this.travelValue >= 100) {
              this.travelValue = 0;
              
            };
          this.value = this.travelValue;
          return this.value;
        };
      };
    }, this.clockSpeed);
   }
   

  setPause(pause: boolean) {
    this.pause = pause;
    clearInterval(this.intervalId);
    this.clockSpeed = this.clockSpeedDefaut;
    this.play();
  }

  fastForward(){
    clearInterval(this.intervalId)
    this.intervalId = undefined;
    this.clockSpeed = this.fastSpeed;
    this.play();
  }
}
