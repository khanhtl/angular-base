import { HttpClient } from '@angular/common/http';
import { ProductsState } from './state/product.state';
import { ProductsFacade } from './product.facade';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './service/products.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,

  ],
  providers: [ProductsFacade,ProductsService, ProductsState]
})
export class ProductsModule { }
