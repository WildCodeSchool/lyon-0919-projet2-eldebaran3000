import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stockbar',
  templateUrl: './stockbar.component.html',
  styleUrls: ['./stockbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class StockbarComponent implements OnInit {

  energy: number = 0;
  energyMax: number = 100;

  constructor() { }

  ngOnInit() {  
    this.energyBar()    
  }

  energyBar() {
    setInterval(() => {
      if (this.energy < this.energyMax) {
        this.energy += 1;
      } else if (this.energy === this.energyMax)
        clearInterval()
    }, 500)
    
    }
  }


