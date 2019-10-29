import { Component, OnInit } from '@angular/core';
import { Time } from './time';
import { TimeSpeedService } from './time-speed.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  clockSpeed: number;
  timer: Time;
  
  

​  constructor(private TimeSpeedService: TimeSpeedService){} 

​//déclenchement de la fonction "clock" à l'ouverture de la page. Prends en parametre clockspeed.
  ngOnInit() {
    this.clockSpeed= this.TimeSpeedService.clockSpeed;
    this.timer = this.TimeSpeedService.timer;
    this.clock();
  }
​
  clock(){
    this.TimeSpeedService.clock(this.clockSpeed);
  }


}
