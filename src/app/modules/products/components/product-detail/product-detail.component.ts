import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProductEntity } from '../../entities/product.entity';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  @Input() product: ProductEntity = {};
}
