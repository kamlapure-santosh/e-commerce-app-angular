import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartKey = 'cart';
  private cartSubject = new BehaviorSubject<number>(0); // default is 0
  cartItemsCount$: Observable<number> = this.cartSubject.asObservable();

  constructor(private toastrService: ToastrService) {}

  //we mark this as private so this function is not accessible outside this service
  private saveCart(cart: ProductModel[]) {
    localStorage.setItem(this.cartKey, JSON.stringify(cart));
  }

  getCart(): ProductModel[] {
    const cartData = localStorage.getItem(this.cartKey);
    const cart = cartData ? JSON.parse(cartData) : [];
    this.cartSubject.next(cart.length); //Notify subscribers. //we notify when this changes
    return cart;
  }

  addToCart(item: ProductModel): void {
    item.quantity = 1; //we do this as this product quantity is more than 1 in model. we need to add only one item when added to cart

    const cart = this.getCart();

    const existingItem = cart.find(
      (cartItem) => cartItem.productId === item.productId
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      const newItem = { ...item, quantity: 1 };
      cart.push(newItem);
    }

    this.saveCart(cart);
    this.cartSubject.next(cart.length); // Notify subscribers
    this.toastrService.success(
      `Added ${item.productName} to cart`,
      'Cart updated'
    );
  }

  clearCart(): void {
    this.saveCart([]);
    this.cartSubject.next(0); //Notify subscribers.
  }
  removeFromCart(productId: number): void {
    //we will find all product except the removed item and save it in cart in local storage
    const cart = this.getCart().filter((item) => item.productId !== productId);
    this.toastrService.info(`Item removed from cart!`, 'Cart updated');
    this.cartSubject.next(cart.length); //Notify subscribers.
    this.saveCart(cart);
  }
}

/*
BehaviorSubject: It is a type of Subject in RxJS. 
A BehaviorSubject is a special type of Subject that keeps the 
"current" value. It maintains a notion of "the current value" 
and you can always directly get the last emitted value from it.

cartSubject: It is an instance of BehaviorSubject<number>, 
initialized with a default value of 0. 
This means that initially, the cartSubject has a value of 0.

cartItemsCount$: It is an observable that is created from the cartSubject 
using the asObservable() method. 
This ensures that the observable consumers (subscribers) 
cannot emit values to the cartSubject directly 
but can only observe the values emitted by it.

In an Angular context, this code is typically used for creating a service that manages the state of a shopping cart or any other numerical value that needs to be observed by multiple components. Other components can subscribe to the cartItemsCount$ observable to receive updates whenever the value of the cart changes.

*/
