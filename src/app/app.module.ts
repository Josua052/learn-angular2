import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AlertModule } from 'ng2-bootstrap';
import { ButtonsModule } from 'ng2-bootstrap/buttons';
import { TopMenuComponent } from './common/top-menu/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent
  ],
  imports: [
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
