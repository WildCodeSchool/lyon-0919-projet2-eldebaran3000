import { Injectable } from '@angular/core';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class TimeSpeedService {
  clockSpeedDefault: number = 1000;
  clockSpeed: number = this.clockSpeedDefault;
  pause: boolean = false;
  intervalId: any;
  timer: Time = {
          day:1,
          month:1,
          year:2800,
  
  } 

  constructor() {
    this.play()
  }

  play() {
    this.intervalId = setInterval(() => {
      if (!this.pause) {
        this.timer.day +=1
        if (this.timer.day === 31) {
          this.timer.month +=1;
          this.timer.day = 1;
        };
        if (this.timer.month === 13) {
          this.timer.year +=1;
          this.timer.month = 1;
        };
      }
    }, this.clockSpeed);
    console.log(this.clockSpeed)
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
}
