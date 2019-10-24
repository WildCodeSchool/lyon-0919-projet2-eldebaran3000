import { Component, OnInit, Input } from '@angular/core';
import { Case } from 'src/app/shared/case';


@Component({
  selector: 'app-cellule',
  templateUrl: './cellule.component.html',
  styleUrls: ['./cellule.component.css']
})
export class CelluleComponent implements OnInit {
  
  @Input('display-cell') casou : Case;

  constructor() { }

  ngOnInit() {
  }

}
