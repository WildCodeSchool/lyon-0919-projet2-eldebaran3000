import { Injectable } from '@angular/core';
import { Time } from './time';

@Injectable({
  providedIn: 'root'
})
export class TimeSpeedService {
  timer: Time = {
    day: 1,
    month: 1,
    year: 2800,
  } 
  clockSpeed: number = 50;
  travelBarSpeed: number = 1000;

  constructor() { }

  clock(clockSpeed) {
    setInterval(() => {
      this.timer.day += 1;
      if (this.timer.day === 31) {
        this.timer.month += 1;
        this.timer.day = 1;
      };
      if (this.timer.month === 13) {
        this.timer.year += 1;
        this.timer.month = 1;
      };
    }, clockSpeed)
  } 
}
