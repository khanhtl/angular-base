import { Component, inject } from '@angular/core';
import { ProductsFacade } from '../../product.facade';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  private readonly productsFacade = inject(ProductsFacade);
  products$ = this.productsFacade.loadProducts();
}
