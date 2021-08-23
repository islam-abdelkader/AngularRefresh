import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from 'src/app/Shared/company-info';
import { IProduct } from 'src/app/_models/iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myComp: CompanyInfo;
  isSevicesDisplay: boolean;
  btnText: string;
  products: IProduct[] = [];
  constructor() {
    this.isSevicesDisplay = false;
    this.btnText = 'Show Services';
    this.myComp = new CompanyInfo('ITI',
      'https://picsum.photos/250/250',
      ['marketing', 'hosting', 'learning'])
    this.products = [
      { ID: 10, Name: "IPhone", Quantity: 3, Price: 15000 },
      { ID: 20, Name: "OPPO", Quantity: 1, Price: 11000 },
      { ID: 30, Name: "Samsung", Quantity: 700, Price: 5000 },
      { ID: 40, Name: "Mi", Quantity: 0, Price: 6000 },
      { ID: 50, Name: "One", Quantity: 150, Price: 1000 },
    ]
  }

  ToggleServices() {
    this.isSevicesDisplay = !this.isSevicesDisplay;
    if (this.isSevicesDisplay) {
      this.btnText = 'Hide Services'
    }
    else {
      this.btnText = 'Show Services'
    }
  }

  ngOnInit(): void {
  }
}
