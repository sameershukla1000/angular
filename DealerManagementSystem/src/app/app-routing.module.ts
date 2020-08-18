import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'home',loadChildren:'./Modules/homes/homes.module#HomeModule'},
  {path:'brand',loadChildren:'./Modules/brand/brand.module#BrandModule'},
  {path:'dealer',loadChildren:'./Modules/dealer/dealer.module#DealerModule'},
  {path:'Vechicle',loadChildren:'./Modules/vechicle/vechicle.module#VechicleModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
