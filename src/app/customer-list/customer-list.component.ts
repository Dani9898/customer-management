import { Component, OnInit, Output } from '@angular/core';
import { EventType } from '@angular/router';
import { ICustomer } from '../customer';
import { CustomerSelectedService } from '../customer-selected.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  public customers: ICustomer[] = [];

  constructor(private _customerSelectedService: CustomerSelectedService) { }

  ngOnInit(): void {
  }

  selectedCustomer(customer: ICustomer) {
    this._customerSelectedService.sendCustomer(customer);
  }

  onChangeCustomer($event: Event){
    const target = $event.target as HTMLInputElement;
    const id = Number(target.value);
    const isChecked = target.checked;
    
    this.customers.map(customer => {
      if(customer.id === id) {
        customer.selected = isChecked;      
      }
    })
  }

  addCustomer(){
    let customer = {id: this.customers.length + 1, name: `Customer ${this.customers.length + 1}`, address: "", city: "", orders: [], selected: false };
    this.customers.push(customer);
  }

  removeCustomer(){
    let newCustomers = this.customers.filter(customer => !customer.selected);
    this.customers = newCustomers;
  }
}

// {number: 0, total: 400, items: 14}, {number: 2, total: 190, items: 6}