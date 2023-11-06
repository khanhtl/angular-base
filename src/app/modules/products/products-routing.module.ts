import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailResolver } from './resolvers/product-detail.resolver';
import { ProductsComponent } from './containers/products/products.component';

const routes: Routes=[
  {
    path: '',
    component: ProductsComponent,
    data: {
      preload: true
    }
  },
  {
    path: ':id',
    loadComponent:() => import('./containers/product/product.component').then(m => m.ProductComponent),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
