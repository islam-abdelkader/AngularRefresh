import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/_models/iproduct';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit, OnChanges {
  @Input() selCatId: number = 0;
  @Output() child: EventEmitter<number>;
  totalPrice: number = 0;
  products: IProduct[] = [];
  constructor() {
    this.products = [
      { ID: 100, Name: 'Iphone 9', Quantity: 5, Price: 8000, CategoryID: 10 },
      { ID: 101, Name: 'Iphone 11', Quantity: 4, Price: 14000, CategoryID: 10 },
      { ID: 102, Name: 'Iphone 12', Quantity: 2, Price: 18000, CategoryID: 10 },
      { ID: 201, Name: 'Dell xps1', Quantity: 2, Price: 18000, CategoryID: 20 },
      { ID: 202, Name: 'Dell xps2', Quantity: 5, Price: 18500, CategoryID: 20 },
      { ID: 203, Name: 'Dell xps3', Quantity: 9, Price: 19000, CategoryID: 20 },
      { ID: 301, Name: 'Sony v.1', Quantity: 9, Price: 1000, CategoryID: 30 },
      { ID: 302, Name: 'Sony v.2', Quantity: 2, Price: 1500, CategoryID: 30 },
      { ID: 303, Name: 'Sony v.3', Quantity: 5, Price: 1300, CategoryID: 30 },
    ]
    this.child = new EventEmitter();
  }

  getPoductByCatId(): IProduct[] {
    return this.products.filter((prd) => { return prd.CategoryID == this.selCatId })
  }
  add(pPrice: number, pCount: any) {
    this.totalPrice = pPrice * pCount;
    this.child.emit(this.totalPrice);
  }
  ngOnInit(): void {
  }

  ngOnChanges() {
    console.log(this.selCatId);
  }
}
