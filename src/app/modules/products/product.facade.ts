import { ProductEntity } from './entities/product.entity';
import { tap } from 'rxjs';
import { ProductsService } from './service/products.service';
import { Injectable, inject } from '@angular/core';
import { ProductsState } from './state/product.state';
@Injectable()
export class ProductsFacade {
  private readonly productsService=inject(ProductsService);
  private readonly productsState=inject(ProductsState);
  /**
   * Lấy danh sách sản phẩm và lưu vào state
   */
  loadProducts() {
    return this.productsService.get()
      .pipe(
        tap((products: ProductEntity[]) => {
          this.productsState.setProducts(products);
        })
    );
  }
  loadProduct(id: number | string) {
    return this.productsService.getById(id)
      .pipe(
        tap((product: ProductEntity) => {
          this.productsState.setProduct(product);
        })
    );
  }
  getProducts() {
    return this.productsState.getProducts();
  }
  /**
   * Lấy sản phẩm theo id
   * @param id
   */
  getCurrentProduct() {
    return this.productsState.getProduct();
  }
}
