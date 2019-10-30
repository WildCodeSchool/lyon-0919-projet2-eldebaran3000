import { Component, OnInit } from '@angular/core';
import { TimeSpeedService } from '../timer/time-speed.service';

@Component({
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.scss']
})
export class ControlerComponent implements OnInit {

  vitesseTemps: number;
  
  constructor(private timeSpeedService: TimeSpeedService) { }

  ngOnInit() {
    
  }

  getClockSpeed(){
    this.vitesseTemps = this.timeSpeedService.clockSpeed;
  }
  //fonction qui arrete le temps
 
  stopTime(){
    clearInterval(this.timeSpeedService.clockSpeed)
    }

  //fonction qui lance le temps
  playTime(){
    this.timeSpeedService.clockSpeed = this.timeSpeedService.clockSpeed;
  }

  //fonction qui double la vitesse du temps
  fastTime(){
    this.timeSpeedService.clockSpeed = this.timeSpeedService.clockSpeed * 0.5;
  }
  
}
