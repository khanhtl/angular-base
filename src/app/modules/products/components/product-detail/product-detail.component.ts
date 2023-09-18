import { ProductsFacade } from './../../product.facade';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent {
  private router=inject(ActivatedRoute);
  private productsFacade=inject(ProductsFacade);
  product$=this.router.paramMap.pipe(switchMap(param => {
    return this.productsFacade.getProductById(Number(param.get('id')))
  }))
}
