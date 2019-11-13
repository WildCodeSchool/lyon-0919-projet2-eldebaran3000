import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
import { TimeSpeedService } from 'src/app/component/timer/time-speed.service';

@Component({
  selector: 'app-victory-page',
  templateUrl: './victory-page.component.html',
  styleUrls: ['./victory-page.component.scss']
})
export class VictoryPageComponent implements OnInit {

  constructor(private timerService: TimeSpeedService) { }

  ngOnInit() {
  }

  replay(){
    this.timerService.replay()
  }

}
