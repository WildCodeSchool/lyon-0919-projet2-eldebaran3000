import { Component, OnInit } from '@angular/core';
import { TimeSpeedService } from "src/app/component/timer/time-speed.service";


@Component({
  selector: 'app-progress-bar-buffer',
  templateUrl: './progress-bar-buffer.component.html',
  styleUrls: ['./progress-bar-buffer.component.scss']
})
export class ProgressBarBufferComponent implements OnInit {
  color = 'primary';
  mode = 'buffer';
  

  constructor(public timeSpeedService: TimeSpeedService) { }

  ngOnInit() {  
  }  
  
}
