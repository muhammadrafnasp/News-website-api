import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BussinessComponent } from './bussiness/bussiness.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { TopheadlineComponent } from './topheadline/topheadline.component';

const routes: Routes = [
  {path:'', component:TopheadlineComponent}, //Topheadlines & home
  {path:'tech', component:TechComponent},
  {path:'buzz', component:BussinessComponent},
  {path:'sports', component:SportsComponent},
  {path:'health', component:HealthComponent},
  {path:'science', component:ScienceComponent}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
