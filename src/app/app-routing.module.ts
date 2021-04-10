import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './components/car/car.component';
import { ImageComponent } from './components/image/image.component';
import { RentPageComponent } from './components/rent-page/rent-page.component';


const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars/brands/:brandId",component:CarComponent},
  {path:"cars/colors/:colorId",component:CarComponent},
  {path:"cars/images/:carId",component:ImageComponent},
  {path:"cars/filter/:colorId/:brandId",component:ImageComponent},
  {path:"cars/rental/:carId",component:RentPageComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
