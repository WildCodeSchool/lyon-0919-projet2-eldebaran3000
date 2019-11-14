import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingComponent } from './component/building/building.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { StockbarComponent } from './component/stockbar/stockbar.component';
import { TimerComponent } from './component/timer/timer.component';
import { ControlerComponent } from './component/controler/controler.component'
import { MenuConstructBuildingComponent } from './component/menu-construct-building/menu-construct-building.component';
import { GridComponent } from './component/grid/grid.component';
import { CelluleComponent } from './component/cellule/cellule.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ProgressBarBufferComponent } from './component/progress-bar-buffer/progress-bar-buffer.component';
import { SetCaseComponent } from './component/set-case/set-case.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { DefeatPageComponent } from './pages/defeat-page/defeat-page.component';
import { VictoryPageComponent } from './pages/victory-page/victory-page.component';
import { MatButtonModule } from '@angular/material/button';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { MenuProductionSpeedComponent } from './component/menu-production-speed/menu-production-speed.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Defeat2Component } from './defeat2/defeat2.component';


@NgModule({
  declarations: [
    AppComponent,
    GamePageComponent,
    NavbarComponent,
    StockbarComponent,
    TimerComponent,
    ControlerComponent,
    BuildingComponent,
    MenuConstructBuildingComponent,
    GridComponent,
    CelluleComponent,
    AccueilPageComponent,
    DefeatPageComponent,
    VictoryPageComponent,
    ProgressBarBufferComponent,
    SetCaseComponent,
    TutorialComponent,
    MenuProductionSpeedComponent,
    Defeat2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressBarModule, 
    MatButtonModule,
    MatSliderModule,
    MatTooltipModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
