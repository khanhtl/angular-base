import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductsFacade } from './../../product.facade';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { ProductDetailComponent } from '../../components/product-detail/product-detail.component';

@Component({
    selector: 'app-product',
    standalone: true,
    imports: [CommonModule, ProductDetailComponent],
    template: `
    <ng-container *ngIf="product$ | async as product; else loading">
        <app-product-detail [product]="product"></app-product-detail>
    </ng-container>

    <ng-template #loading>
        <div>
            loading...
        </div>
    </ng-template>
  `,
})
export class ProductComponent {
    private readonly productsFacade = inject(ProductsFacade);
    private readonly route = inject(ActivatedRoute);

    product$ = this.route.paramMap.pipe(
        switchMap(params => {
            console.log(params)
            return this.productsFacade.loadProduct(params.get('id') as string)
        })
    );
}
