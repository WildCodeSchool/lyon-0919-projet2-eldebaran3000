import { Component, OnInit } from '@angular/core';
import { TimeSpeedService } from '../timer/time-speed.service';

@Component({
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.scss']
})
export class ControlerComponent implements OnInit {

  vitesseTemps: number;
  clockSpeed: number;
  
  constructor(private timeSpeedService: TimeSpeedService) { }

  ngOnInit() {
    this.getClockSpeed();
  }

  getClockSpeed(){
    this.vitesseTemps = this.timeSpeedService.clockSpeed;
  }

  //fonction qui arrete le temps
  stopTime(){
    this.timeSpeedService.setPause(true);
  }

  //fonction qui lance le temps
  playTime(){
    this.timeSpeedService.setPause(false);
  }

  //fonction qui double la vitesse du temps
  fastTime(){
    this.clockSpeed = this.timeSpeedService.clockSpeed;
    this.timeSpeedService.fastForward();
    
    
  }
  
}
