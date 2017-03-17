import { AfterViewInit, Component, Inject, Renderer } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent{
  title = 'Belajar Angular 2 Part - 2';
  indonesiaIslandList = ['Sumatera', 'Jawa', 'Bali', 'Kalimantan','Sulawesi','Papua'];

}
