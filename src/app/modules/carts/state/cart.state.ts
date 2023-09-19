import { Injectable } from '@angular/core';
import { filter, from, map, reduce } from 'rxjs';
import { BehaviorSubject, Subject } from 'rxjs';
import { CartEntity } from '../entities/cart.entity';

@Injectable()
export class ProductsState {
  private carts$: BehaviorSubject<CartEntity[]> = new BehaviorSubject([] as CartEntity[]);
  private totalPrice$: BehaviorSubject<number> = new BehaviorSubject(0);
  private quantity$ :BehaviorSubject<number> = new BehaviorSubject(0);
  constructor() {}
  /**
   * Lấy danh sách sản phẩm
   */
  getCartItems$() {
    return this.carts$.asObservable();
  }

  getCartQuantity$() {
    const currentValue = this.carts$.getValue();
    return from(currentValue).pipe(reduce((acc, cartItem) => acc + Number(cartItem.quantity ?? 0), 0))
  }

  setCartItems(cartItems: CartEntity[]) {
    this.carts$.next(cartItems);
  }

  addToCart(cartItem: CartEntity) {
    const currentValue = this.carts$.getValue();
    this.carts$.next([...currentValue, cartItem]);
  }

  updateCartItem(id: number, newValue: CartEntity) {
    const currentValue = this.carts$.getValue();
    const index = currentValue.findIndex(item => item.productId == id);
    if(index >= 0) {
        currentValue.splice(index, 1, newValue);
        this.carts$.next(currentValue);
    }
  }

  deleteCartItem(id: number) {
    const currentValue = this.carts$.getValue();
    const index = currentValue.findIndex(item => item.productId == id);
    if(index >= 0) {
        currentValue.splice(index, 1);
        this.carts$.next(currentValue);
    }
  }
}
