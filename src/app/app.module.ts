import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BuildingComponent } from './component/building/building.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StockbarComponent } from './component/stockbar/stockbar.component';
import { TravelbarComponent } from './component/travelbar/travelbar.component';
import { TimerComponent } from './component/timer/timer.component';
import { ControlerComponent } from './component/controler/controler.component';
import { MenuConstructBuildingComponent } from './component/menu-construct-building/menu-construct-building.component';
import { GridComponent } from './component/grid/grid.component';
import { CelluleComponent } from './component/cellule/cellule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressBarBufferComponent } from './progress-bar-buffer/progress-bar-buffer.component';
import { MatProgressBar } from '@angular/material/'

@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    NavbarComponent,
    StockbarComponent,
    TravelbarComponent,
    TimerComponent,
    ControlerComponent,
    BuildingComponent,
    MenuConstructBuildingComponent,
    GridComponent,
    CelluleComponent,
    ProgressBarBufferComponent,
    MatProgressBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
