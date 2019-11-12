import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-menu-production-speed',
  templateUrl: './menu-production-speed.component.html',
  styleUrls: ['./menu-production-speed.component.scss']
})
export class MenuProductionSpeedComponent implements OnInit {

  clickMenu: boolean = false;

  constructor(private service: GameService) { }

  ngOnInit() {
  };
  clickAppear() {
    this.clickMenu = !this.clickMenu
  };
}
