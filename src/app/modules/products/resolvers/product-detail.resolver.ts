import { inject } from "@angular/core";
import {
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  ResolveFn,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductEntity } from "../entities/product.entity";
import { ProductsFacade } from "../product.facade";

export const ProductDetailResolver: ResolveFn<ProductEntity> = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    productsFacade: ProductsFacade = inject(ProductsFacade)
  ): Observable<ProductEntity> => productsFacade.loadProduct(route.paramMap.get('id') as string);