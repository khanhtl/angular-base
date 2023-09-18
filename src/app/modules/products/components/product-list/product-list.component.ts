import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsFacade } from './../../product.facade';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  private readonly productsFacade=inject(ProductsFacade);

  products$=this.productsFacade.loadProducts();
}
