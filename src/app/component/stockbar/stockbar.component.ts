import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-stockbar',
  templateUrl: './stockbar.component.html',
  styleUrls: ['./stockbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockbarComponent implements OnInit {

  energy: number = 0;
  food: number = 0;
  iron: number = 0;
  human: number = 0;
  energyMax: number;
  foodMax: number;
  ironMax: number;
  humanMax: number;
  energyProd: number = 0;
  foodProd: number = 0;
  ironProd: number = 0;

  constructor(private gameService : GameService) {
   }

  ngOnInit() {  
    this.energyBar();
    this.energyMax = this.gameService.energyMax;
    this.foodMax = this.gameService.foodMax;
    this.ironMax = this.gameService.ironMax;
    this.humanMax = this.gameService.humanMax;
  }

/*Fonction appelant les données stockées dans le GameService pour mettre à jour le visuel,
que ce soit les bars ou les données en dessous.*/

  energyBar() {
    setInterval(() => {
    this.energyMax = this.gameService.energyMax;
    this.foodMax = this.gameService.foodMax;
    this.ironMax = this.gameService.ironMax;
    this.humanMax = this.gameService.humanMax;
    }, 500);
    setInterval(() => {
      if (this.energy < this.energyMax) {
        this.energy += 1;
      } else if (this.energy === this.energyMax)
        clearInterval();
      if (this.food < this.foodMax) {
        this.food += 1;
      } else if (this.food === this.foodMax)
        clearInterval();
      if (this.iron < this.ironMax) {
        this.iron += 1;
      } else if (this.iron === this.ironMax)
        clearInterval();
      if (this.human < this.humanMax) {
        this.human += 1;
      } else if (this.human === this.humanMax)
        clearInterval();
    }, 500);  
  };
}


