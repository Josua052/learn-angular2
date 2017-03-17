import { NgModule }   from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent }  from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DetailIslandComponent } from './home/detail-island.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'about', component: AboutComponent},
  { path: 'detail/:id', component: DetailIslandComponent},
  { path : '', component :HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes, {
        useHash : true
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
