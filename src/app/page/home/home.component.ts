import { AfterViewInit, Component, Inject, Renderer,OnInit,OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
  title: string;
  data : any;
  indonesiaIslandList :string[];

  constructor(){

  }
  ngOnInit(): void {
    this.title = 'Belajar Angular 2 Part - 2';
    this.indonesiaIslandList = ['Sumatera', 'Jawa', 'Bali', 'Kalimantan','Sulawesi','Papua'];
    let populateIsland = {
        "data" : [
            {"id" :"1", "name" : "Sumatera"},
            {"id" :"2", "name" : "Jawa"},
            {"id" :"3", "name" : "Bali"},
            {"id" :"4", "name" : "Kalimantan"},
            {"id" :"5", "name" : "Sulawesi"},
            {"id" :"6", "name" : "Papua"}
        ]
    }
    this.data = populateIsland.data;
    console.log(this.data)
  }

}
