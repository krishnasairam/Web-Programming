import { Component, OnInit } from '@angular/core';
import {FileService} from '../file.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  temp:any = [];
  len:number;
  constructor(private service:FileService) {
      this.len = service.getLen();
      this.temp = service.getDetails();
   }

  ngOnInit() {
  }
  
}
