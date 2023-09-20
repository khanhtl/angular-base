import { ProductsState } from './state/product.state';
import { ProductsFacade } from './product.facade';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './service/products.service';
import { ProductsComponent } from './containers/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,

  ],
  providers: [ProductsFacade,ProductsService, ProductsState],
  declarations: [
    ProductsComponent
  ]
})
export class ProductsModule { }
