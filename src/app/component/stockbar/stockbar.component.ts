import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GameService } from 'src/app/shared/game.service';

@Component({
  selector: 'app-stockbar',
  templateUrl: './stockbar.component.html',
  styleUrls: ['./stockbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockbarComponent implements OnInit {




  constructor(private gameService : GameService) {
   }

  ngOnInit() {  
    this.productionBar();
  }

/*Fonction appelant les données stockées dans le GameService pour mettre à jour le visuel,
que ce soit les bars ou les données en dessous.*/

  productionBar() {
    setInterval(() => {
      this.gameService.getProductionCapacity()
      if (this.gameService.energy < this.gameService.energyMax - this.gameService.energyProd && this.gameService.energy >= 0 - this.gameService.energyProd ) {
        this.gameService.energy += this.gameService.energyProd;
      } else if (this.gameService.energy === this.gameService.energyMax)
        clearInterval();
      if (this.gameService.food < this.gameService.foodMax && this.gameService.food >= 0 ) {
        this.gameService.food += this.gameService.foodProd;
      } else if (this.gameService.food === this.gameService.foodMax )
        clearInterval();
      if (this.gameService.iron < this.gameService.ironMax && this.gameService.iron >= 0 ) {
        this.gameService.iron += this.gameService.ironProd;
      } else if (this.gameService.iron === this.gameService.ironMax)
        clearInterval();
      if (this.gameService.human < this.gameService.humanMax && this.gameService.human >= 0) {
        this.gameService.human += 1;
      } else if (this.gameService.human === this.gameService.humanMax)
        clearInterval();
    }, 1000);  
  };





}


