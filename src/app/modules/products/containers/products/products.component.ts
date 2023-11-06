import { Component, inject } from '@angular/core';
import { ProductsFacade } from '../../product.facade';
import { ProductListComponent } from '../../components/product-list/product-list.component';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  imports: [ProductListComponent, NgIf, AsyncPipe],
  standalone: true
})
export class ProductsComponent {
  private readonly productsFacade = inject(ProductsFacade);
  products$ = this.productsFacade.loadProducts();
}
