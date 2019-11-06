import { Component, OnInit } from '@angular/core';
import { Time } from '../component/timer/time';
import { TimeSpeedService } from "src/app/component/timer/time-speed.service";
import { TravelbarComponent } from '../component/travelbar/travelbar.component';

@Component({
  selector: 'app-progress-bar-buffer',
  templateUrl: './progress-bar-buffer.component.html',
  styleUrls: ['./progress-bar-buffer.component.scss']
})
export class ProgressBarBufferComponent implements OnInit {
  travelBarSpeed : number= 1000;
  valuez: number = 0;
  color = 'primary';
  mode = 'buffer';
  value = this.valuez;
  bufferValue = 0;

  constructor() { }

  ngOnInit() {  
   
    this.travel(this.travelBarSpeed);
  }

  travel(travelBarSpeed) {
    setInterval(() => {
      this.valuez += 20;
      this.value = this.valuez
      if (this.valuez === 100) {
        this.valuez = 0
      }
      return this.value
    }, travelBarSpeed);
  };

  
  
  
}
