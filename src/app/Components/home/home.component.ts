import { Component, OnInit } from '@angular/core';
import { CompanyInfo } from 'src/app/Shared/company-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myComp: CompanyInfo;
  isSevicesDisplay: boolean;
  btnText: string;
  constructor() {
    this.isSevicesDisplay = false;
    this.btnText = 'Show Services';
    this.myComp = new CompanyInfo('ITI',
      'https://placekitten.com/250/250',
      ['marketing', 'hosting', 'learning'])
  }

  ngOnInit(): void {
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
}
