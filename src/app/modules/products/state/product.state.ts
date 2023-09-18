import { ProductEntity } from './../entities/product.entity';
import { Injectable } from '@angular/core';
import { filter } from 'rxjs';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class ProductsState {
  private products: BehaviorSubject<ProductEntity[]> = new BehaviorSubject([] as ProductEntity[]);
  constructor() {}
  /**
   * Lấy danh sách sản phẩm
   */
  getProducts() {
    return this.products.asObservable();
  }
  /**
   * Update danh sách sản phẩm
   * @param products
   */
  setProducts(products: ProductEntity[]) {
    this.products.next(products);
  }

}
