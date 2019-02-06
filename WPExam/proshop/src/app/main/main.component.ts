import { Component, OnInit } from '@angular/core';
import {FileService} from '../file.service';
import {CartService} from '../cart.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  temp:any = [];
  len:number;
    constructor(private ser:FileService,
      private ser1:CartService) { 
      this.len = ser.getLen();
      this.temp = ser.getDetails();
    }
  ngOnInit() {
  }
  cart(val){
    this.ser1.set(val);
  }
}
