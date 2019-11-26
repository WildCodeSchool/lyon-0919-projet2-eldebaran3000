import { Component, OnInit } from '@angular/core';
import { TimeSpeedService } from 'src/app/component/timer/time-speed.service';

@Component({
  selector: 'app-accueil-page',
  templateUrl: './accueil-page.component.html',
  styleUrls: ['./accueil-page.component.scss']
})
export class AccueilPageComponent implements OnInit {

  constructor(private timeSpeedService : TimeSpeedService) { }

  ngOnInit() {
  }






}
