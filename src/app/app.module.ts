import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutComponent } from './page/about/about.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { AppRoutingModule } from './page/app.route.module';
import { HomeComponent } from './page/home/home.component';
import { MaterialModule } from '@angular/material';
import { DetailIslandComponent } from './page/home/detail-island.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    AboutComponent,
    HomeComponent,
    DetailIslandComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TopMenuComponent]
})
export class AppModule { }
