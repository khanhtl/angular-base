import { Injectable, inject } from "@angular/core";
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from "@angular/router";
import { Observable } from "rxjs";
import { ProductEntity } from "../entities/product.entity";
import { ProductsFacade } from "../product.facade";


@Injectable()
export class ProductResolver implements Resolve<ProductEntity[]> {
    private readonly productsFacade=inject(ProductsFacade);

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ProductEntity[]> {
    return this.productsFacade.loadProducts();
  }
}