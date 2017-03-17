import { AfterViewInit, Component, Inject, Renderer,OnInit,OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Island }   from './island';
@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
  title: string;
  data : any;
  indonesiaIslandList :string[];
  islands : Island[];

  constructor(private router: Router){

  }
  ngOnInit(): void {
    this.title = 'Belajar Angular 2 Part - 2';
    this.indonesiaIslandList = ['Sumatera', 'Jawa', 'Bali', 'Kalimantan','Sulawesi','Papua'];
    let populateIsland = {
        "data" : [
            {"id" :1, "name" : "Sumatera"},
            {"id" :2, "name" : "Jawa"},
            {"id" :3, "name" : "Bali"},
            {"id" :4, "name" : "Kalimantan"},
            {"id" :5, "name" : "Sulawesi"},
            {"id" :6, "name" : "Papua"}
        ]
    }
    this.islands = populateIsland.data;
    console.log(this.islands);
  }

  onSelect(island:Island): void {
    console.log(island);
    this.router.navigate(['/detail', island.id]);
  }

}
