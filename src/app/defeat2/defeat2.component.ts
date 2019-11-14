import { Component, OnInit } from '@angular/core';
import { TimeSpeedService } from '../component/timer/time-speed.service';

@Component({
  selector: 'app-defeat2',
  templateUrl: './defeat2.component.html',
  styleUrls: ['./defeat2.component.scss']
})
export class Defeat2Component implements OnInit {

  constructor(private timerService : TimeSpeedService) { }

  ngOnInit() {
  }

  replay(){
    this.timerService.replay()
  }

}
