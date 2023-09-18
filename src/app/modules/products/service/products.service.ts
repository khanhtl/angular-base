import { HttpClient } from '@angular/common/http';
import { ProductEntity } from './../entities/product.entity';
import { BaseService } from './../../../shared/services/base.service';
import { Injectable, inject } from '@angular/core';

@Injectable()
export class ProductsService extends BaseService<ProductEntity> {
  constructor() {
    super('products');
  }
}
