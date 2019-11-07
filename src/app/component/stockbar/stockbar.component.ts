import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';
import { TimeSpeedService } from '../timer/time-speed.service';

@Component({
  selector: 'app-stockbar',
  templateUrl: './stockbar.component.html',
  styleUrls: ['./stockbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockbarComponent implements OnInit {

  energyProgress: number;
  foodProgress: number;
  ironProgress: number;

  constructor(private gameService : GameService, private timeService : TimeSpeedService) {
   };

  ngOnInit() {
  };







}


