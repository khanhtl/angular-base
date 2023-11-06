import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsFacade } from './product.facade';
import { ProductsState } from './state/product.state';

import { ProductsComponent } from './containers/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsService } from './service/products.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ProductsComponent
  ],
  providers: [ProductsFacade,ProductsService, ProductsState],
})
export class ProductsModule { }
