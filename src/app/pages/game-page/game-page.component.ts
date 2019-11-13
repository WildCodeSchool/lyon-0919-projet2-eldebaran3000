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
    this.service.foodProgress = (this.service.food * 100) /this.service.foodMax;
  };

  @HostListener('window:keydown.e') cheatEnergy(){
    this.service.energy += 100;
    this.service.energyProgress = (this.service.energy * 100) /this.service.energyMax;
  };

  @HostListener('window:keydown.i') cheatIron(){
    this.service.iron += 100;
    this.service.ironProgress = (this.service.iron * 100) /this.service.ironMax;
  };

  @HostListener('window:keydown.h') cheatHuman(){
    this.service.human += 100;
    this.service.humanProgress = (this.service.human * 100) /this.service.humanMax;
  }

  constructor(private service: GameService) { }

  ngOnInit() {
  };



}
