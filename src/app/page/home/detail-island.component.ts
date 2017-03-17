import { AfterViewInit, Component, Inject, Renderer, OnInit,OnDestroy} from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'detail-island',
  templateUrl: './detail-island.component.html'
})

export class DetailIslandComponent implements OnInit{
  id:number;
  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number

         // In a real app: dispatch action to load the details here.
    });
  }
  ngOnDestroy() {
     this.sub.unsubscribe();
   }
}
