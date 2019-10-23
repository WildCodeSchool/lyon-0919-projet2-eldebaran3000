import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuildingComponent } from './menu-construct-building/building/building.component';
import { MenuConstructBuildingComponent } from './menu-construct-building/menu-construct-building.component';

@NgModule({
  declarations: [
    AppComponent,
    BuildingComponent,
    MenuConstructBuildingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
