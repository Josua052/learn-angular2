import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { AboutComponent } from './page/about/about.component';
import { TopMenuComponent } from './common/top-menu/top-menu.component';
import { AppRoutingModule } from './page/app.route.module';
import { HomeComponent } from './page/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TopMenuComponent]
})
export class AppModule { }
