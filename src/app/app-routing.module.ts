import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilPageComponent } from './pages/accueil-page/accueil-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { VictoryPageComponent } from './pages/victory-page/victory-page.component';
import { DefeatPageComponent } from './pages/defeat-page/defeat-page.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';
import { Defeat2Component } from './defeat2/defeat2.component';


const routes: Routes = [
  {path: "", component: AccueilPageComponent},
  {path: "game", component: GamePageComponent},
  {path: "victory", component: VictoryPageComponent},
  {path: "defeat", component: DefeatPageComponent},
  {path: "tutorial", component: TutorialComponent},
  {path: "defeat2", component: Defeat2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
