import { Component, OnInit } from '@angular/core';
import { Time } from '../component/timer/time';
import { TimeSpeedService } from "src/app/component/timer/time-speed.service";

@Component({
  selector: 'app-progress-bar-buffer',
  templateUrl: './progress-bar-buffer.component.html',
  styleUrls: ['./progress-bar-buffer.component.scss']
})
export class ProgressBarBufferComponent implements OnInit {

  valuez: number = 0;
  color = 'primary';
  mode = 'buffer';
  value = this.valuez;
  bufferValue = 0;

  constructor(private timeSpeedService: TimeSpeedService) { }

  ngOnInit() {
    this.clockTravel(this.timeSpeedService.travelBarSpeed)
  }
  clockTravel(travelBarSpeed){
    setInterval(() =>{
      this.valuez += 20;
      this.value = this.valuez
      if (this.valuez === 100) {
        this.valuez = 0
      }
      return this.value
    }, travelBarSpeed);   
  }
  
  
  
}
