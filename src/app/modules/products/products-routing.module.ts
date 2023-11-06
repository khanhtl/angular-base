import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductResolver } from './resolvers/product.resolver';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';

const routes: Routes=[
  {
    path: '',
    loadComponent:() => import('./components/product-list/product-list.component').then(m => m.ProductListComponent),
    resolve: {
      product: ProductResolver
    },
    data: {
      preload: true
    }
  },
  {
    path: ':id',
    loadComponent:() => import('./components/product-detail/product-detail.component').then(m => m.ProductDetailComponent),
    resolve: {
      product: ProductDetailResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
