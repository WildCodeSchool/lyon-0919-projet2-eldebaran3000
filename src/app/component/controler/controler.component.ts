import { Component, OnInit } from '@angular/core';
import { TimeSpeedService } from '../timer/time-speed.service';

@Component({
  selector: 'app-controler',
  templateUrl: './controler.component.html',
  styleUrls: ['./controler.component.scss']
})
export class ControlerComponent implements OnInit {

  
  constructor(private timeSpeedService: TimeSpeedService) { }

  ngOnInit() {
    
  }
  //fonction qui arrete le temps

  stopTime(){
    this.timeSpeedService.clockSpeed=this.timeSpeedService.clockSpeed*10000;
    console.log("ca marche");
  }

  //fonction qui lance le temps
  playTime(){
    this.timeSpeedService.clockSpeed=this.timeSpeedService.clockSpeed
  }

  //fonction qui double la vitesse du temps
  fastTime(){
    this.timeSpeedService.clockSpeed=this.timeSpeedService.clockSpeed*0.5
  }
  
}
