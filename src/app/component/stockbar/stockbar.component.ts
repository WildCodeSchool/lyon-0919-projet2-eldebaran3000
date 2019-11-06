import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-stockbar',
  templateUrl: './stockbar.component.html',
  styleUrls: ['./stockbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockbarComponent implements OnInit {



  energyProd: number = 0;
  foodProd: number = 0;
  ironProd: number = 0;

  constructor(private gameService : GameService) {
   }

  ngOnInit() {  
    this.energyBar();
  }

/*Fonction appelant les données stockées dans le GameService pour mettre à jour le visuel,
que ce soit les bars ou les données en dessous.*/

  energyBar() {
    setInterval(() => {
      if (this.gameService.energy < this.gameService.energyMax) {
        this.gameService.energy += 1;
      } else if (this.gameService.energy === this.gameService.energyMax)
        clearInterval();
      if (this.gameService.food < this.gameService.foodMax) {
        this.gameService.food += 1;
      } else if (this.gameService.food === this.gameService.foodMax)
        clearInterval();
      if (this.gameService.iron < this.gameService.ironMax) {
        this.gameService.iron += 1;
      } else if (this.gameService.iron === this.gameService.ironMax)
        clearInterval();
      if (this.gameService.human < this.gameService.humanMax) {
        this.gameService.human += 1;
      } else if (this.gameService.human === this.gameService.humanMax)
        clearInterval();
    }, 500);  
  };
}


