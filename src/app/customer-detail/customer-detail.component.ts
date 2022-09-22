import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';
import { CustomerSelectedService } from '../customer-selected.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  public customer: ICustomer | undefined;

  // orders totals data
  public ordersN:number = 0;
  public ordersT:number = 0;
  public totItems:number = 0;

  constructor(private _customerSelectedService: CustomerSelectedService) {}

  ngOnInit(): void {
    this._customerSelectedService.customerSelected$.subscribe(data => this.customer = data);
  }

  addOrder(){
    let newOrder = {id: this.customer?.orders.length+1, total: 0, items: 0, selected: false}
    this.customer?.orders.push(newOrder); 
    this.ordersN = this.customer?.orders.length;
  }

  removeOrder(){
    let newOrders = this.customer?.orders.filter(order => !order.selected);    
    if(this.customer?.orders){
      this.customer.orders = newOrders
    }    
    this.ordersN = this.customer?.orders.length;
  }

  ngAfterContentChecked(){
    // Updates the total orders data
    this.ordersN = this.customer?.orders.length;

    let newOrdersT:number = 0; 
    let newTotItems: number = 0;

    this.customer?.orders.forEach(order => {
      newOrdersT += Number(order.total);
      newTotItems += Number(order.items)
    });
    this.ordersT = newOrdersT;
    this.totItems = newTotItems;
  }

}
