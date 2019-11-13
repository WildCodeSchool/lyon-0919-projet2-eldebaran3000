import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
import { TimeSpeedService } from 'src/app/component/timer/time-speed.service';

@Component({
  selector: 'app-defeat-page',
  templateUrl: './defeat-page.component.html',
  styleUrls: ['./defeat-page.component.scss']
})
export class DefeatPageComponent implements OnInit {

  constructor(private timerService : TimeSpeedService) { }

  ngOnInit() {
  }

  replay(){
    this.timerService.replay()
  }

}
