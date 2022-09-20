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

  // seleziona il customer di cui si vedrà il detail
  selectedCustomer(customer: ICustomer) {
    this._customerSelectedService.sendCustomer(customer);
  }

  // cambia la proprietà selected da vero a falso o viceversa quando si spunta la checkbox
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

  // aggiunge un customer
  addCustomer(){
    let customer = {id: this.customers.length + 1, name: `Customer ${this.customers.length + 1}`, address: "", city: "", orders: [], selected: false };
    this.customers.push(customer);
  }

  // rimuove i customer selezionati
  removeCustomer(){
    let newCustomers = this.customers.filter(customer => !customer.selected);
    this.customers = newCustomers;
  }
}