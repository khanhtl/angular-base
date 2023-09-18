import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes=[
  {
    path: '',
    loadComponent:() => import('./components/product-list/product-list.component').then(m => m.ProductListComponent),
  },
  {
    path: ':id',
    loadComponent:() => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
