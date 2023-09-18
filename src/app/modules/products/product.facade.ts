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
  /**
   * Lấy sản phẩm theo id
   * @param id
   */
  getProductById(id: number) {
    return this.productsService.getById(id);
  }

}
