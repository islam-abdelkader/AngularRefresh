import { Component, NgModule, OnInit } from '@angular/core';
import { ICategory } from 'src/app/_models/icategory';

@Component({
  selector: 'app-master-order',
  templateUrl: './master-order.component.html',
  styleUrls: ['./master-order.component.css']
})
export class MasterOrderComponent implements OnInit {

  cats: ICategory[] = [];
  catId: number = 0;
  Total: number = 0;
  constructor() {
    this.cats = [
      { ID: 10, Name: "Mobiles" },
      { ID: 20, Name: "Lab-tops" },
      { ID: 30, Name: "Head-Phones" },
    ]
  }
  Parent(totalPrice: number) {
    this.Total = totalPrice;
    // console.log(totalPrice);
  }
  ngOnInit(): void {
  }
}
