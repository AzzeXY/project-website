import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppUiModule} from "./modules/app-ui.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MDBRootModule, NavbarModule} from "angular-bootstrap-md";
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import {AppRoutingModule} from "./app-routing.module";
import { ProjekteComponent } from './pages/projekte/projekte.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProjekteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppUiModule,
    NgbModule,
    NavbarModule,
    NavbarModule,
    NavbarModule,
    MDBRootModule,
    MatListModule,
    RouterOutlet,
    MatCheckboxModule,
    FormsModule,
    RouterLink,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
