import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from 'src/app/shared/game.service';
import { TimeSpeedService } from '../timer/time-speed.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private timeService: TimeSpeedService) { }

  ngOnInit() {  }

  return(){
      this.timeService.replay()
  }

}
