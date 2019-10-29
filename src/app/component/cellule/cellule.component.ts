import { Component, OnInit, Input } from '@angular/core';
import { Case } from 'src/app/shared/case';
import { GameService } from 'src/app/shared/game.service';


@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {
  
  @Input('display-cell') casou : Case;

  constructor(private gameService : GameService) { }

  ngOnInit() {
  }
/*
  onBuildModePlace(casou : Case) {
    this.gameService.onBuildModePlace(casou)
  }
  */
}
