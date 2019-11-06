import { Component, OnInit } from '@angular/core';
import { Time } from './time';
import { TimeSpeedService } from './time-speed.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

//création de l'objet "timer" qui débute au jour 1, mois 1 an 2080 dès l'ouverture de la page.
  timer: Time;
  
​  constructor(private timeSpeedService: TimeSpeedService){} 

​//déclenchement de la fonction "clock" à l'ouverture de la page. Prends en parametre clockspeed.
  ngOnInit() {
    this.timer = this.timeSpeedService.timer;
  }
}
