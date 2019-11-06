import { Injectable } from '@angular/core';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class TimeSpeedService {
  //timer
  clockSpeed: number = 50;
  pause: boolean = false;
  fast: boolean = false;
  timer: Time = {
    day: 1,
    month: 1,
    year: 2800,
  }

  //Travel Bar
  travelValue: number = 10;
  value = this.travelValue;

  


  constructor() {
    setInterval(() => {
      
      if (!this.pause) {
        this.timer.day +=1
        if (this.timer.day === 31) {
          this.timer.month +=1;
          this.timer.day = 1;
          
        };
        if (this.timer.month === 13) {
          this.timer.year += 1;
          this.timer.month = 1;
          this.travelValue += 1.33;
          this.value = this.travelValue;
          return this.value;
        };
      };
    }, this.clockSpeed);
  }

  setPause(pause: boolean) {
    this.pause = pause;
  }

  setClockSpeed(clockSpeed: number) {
    this.clockSpeed = clockSpeed;
  }

  fastForward(clockSpeed: number){
    clockSpeed = this.clockSpeed * 10;
    this.clockSpeed = clockSpeed;
  }
}
