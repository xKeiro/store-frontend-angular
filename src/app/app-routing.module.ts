import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PriceListPageComponent } from './price-list-page/price-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    title: 'Main Page'
  },
  {
    path: 'pricelist',
    component: PriceListPageComponent,
    title: 'Price List'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
