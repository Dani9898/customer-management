import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: ICustomer[] = [
    {name: "marco", address: "Via carbonara 30", city: "Bologna", orders[]:{orderNumber: 1, total: 400, items: 10}} 
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
