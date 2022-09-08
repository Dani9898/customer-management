import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';
import { CustomerSelectedService } from '../customer-selected.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  public customer: ICustomer | undefined;
  constructor(private _customerSelectedService: CustomerSelectedService) { }

  ngOnInit(): void {
    this._customerSelectedService.customerSelected$.subscribe(data => this.customer = data);
  }
}
