import { Component, OnInit, Input } from '@angular/core';
import { Case } from 'src/app/shared/case';
import { GameService } from 'src/app/shared/game.service';


@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {
  
  @Input() displayCell : Case;

  constructor(private gameService : GameService) { }

  ngOnInit() {
  }

  onBuildModePlace(casou) {
    this.gameService.getPlaceToBuild(casou)
    console.log(this.displayCell)
  }

}
