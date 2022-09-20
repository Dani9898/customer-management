import { Component, Input, OnInit } from '@angular/core';
import { ICustomer } from '../customer';
// import { CustomerSelectedService } from '../customer-selected.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  @Input("parentData") public customer: ICustomer | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
