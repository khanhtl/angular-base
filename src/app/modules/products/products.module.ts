import { ProductsState } from './state/product.state';
import { ProductsFacade } from './product.facade';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './service/products.service';
import { ProductsComponent } from './containers/products/products.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductListComponent
  ],
  providers: [ProductsFacade,ProductsService, ProductsState],
  declarations: [
    ProductsComponent
  ]
})
export class ProductsModule { }
