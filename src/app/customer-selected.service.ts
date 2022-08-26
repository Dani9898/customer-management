import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ICustomer } from './customer';


@Injectable({
  providedIn: 'root'
})
export class CustomerSelectedService {
  private _customerSelected = new Subject<ICustomer>();
  customerSelected$ = this._customerSelected.asObservable();

  constructor() { }

  sendCustomer(customer: ICustomer) {
    this._customerSelected.next(customer);
  }
}
