import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  temp1: any = [];
  len:any;
  constructor(private ser2:CartService) {
    this.temp1 = this.ser2.get();
    this.len = this.ser2.len();
   }

  ngOnInit() {
  }
  del(val){
    this.ser2.del(val);
    this.temp1 = this.ser2.get();
  }

}
