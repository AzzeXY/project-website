import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatSidenavModule} from "@angular/material/sidenav";

const uiModules = [
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatToolbarModule,
  MatSidenavModule
];

@NgModule({
  imports: uiModules,
  exports: uiModules
})
export class AppUiModule { }
