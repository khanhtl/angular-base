import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsFacade } from './../../product.facade';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  private readonly productsFacade=inject(ProductsFacade);
  product$=this.productsFacade.getCurrentProduct();
}
