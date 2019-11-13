import { Component, OnInit, HostListener } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  @HostListener('window:keydown.f') cheatFood(){
    this.service.food += 100;
  };

  @HostListener('window:keydown.e') cheatEnergy(){
    this.service.energy += 100;
  };

  @HostListener('window:keydown.i') cheatIron(){
    this.service.iron += 100;
  };

  @HostListener('window:keydown.h') cheatHuman(){
    this.service.human += 100;
  }

  @HostListener('window:keydown.c') cancelBuildingMode(){
    this.service.buildingToConstruct = undefined;
  }

  constructor(private service: GameService) { }

  ngOnInit() {
  };



}
