import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: any =[];
  constructor() { }
  set(val){
    this.cart.push(val);
  }
  get() {
    return this.cart;
  }
  len(){
    return this.cart.length;
  }
  del(ind) {
    this.cart.splice(ind,1);
  }
}
