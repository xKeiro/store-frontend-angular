import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PriceListPageComponent } from './price-list-page/price-list-page.component';
import { CategoryPageComponent } from './category-page/category-page.component';

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
  },
  {
    path: 'category/:id',
    component: CategoryPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
