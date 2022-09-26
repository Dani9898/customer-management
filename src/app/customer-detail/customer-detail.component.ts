import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ICustomer, IOrder } from '../customer';
import { CustomerSelectedService } from '../customer-selected.service';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnDestroy {

  public customer: ICustomer | undefined;

  public ordersT: number = 0;
  public totItems: number = 0;

  /**
   * Get Orders number
   */
  public get ordersN(): number {
    if (!this.customer) return 0;
    return this.customer.orders.length;
  }

  /**
   * Customer subscription instance
   */
  private customerSubscription: Subscription | undefined;

  constructor(private _customerSelectedService: CustomerSelectedService) {
    this.customerSubscription = this._customerSelectedService.customerSelected$.subscribe(data => this.customer = data);
  }

  /**
   * Aggiunto lifecycle ngOnDestroy per rimuovere la subscription 
   * fatta nell'ngOnInit.
   */
  ngOnDestroy(): void {
    if (!this.customerSubscription) return;
    this.customerSubscription.unsubscribe();
  }

  /**
   * Aggiunge un nuovo ordine
   */
  addOrder() {
    let newOrder = {} as IOrder;
    newOrder.id = this.customer?.orders.length + 1
    newOrder.total = 0;
    newOrder.items = 0;
    newOrder.selected = false;
    this.customer?.orders.push(newOrder);
  }

  /**
   * Rimuove gli ordini selezionati
   */
  removeOrder() {
    if (!this.customer) return;
    this.customer.orders = this.customer.orders.filter(order => !order.selected);
  }

  /**
   * Aggiorna i totali
   */
  ngAfterContentChecked() {
    this.ordersT = 0;
    this.totItems = 0;
    this.customer?.orders.forEach(order => {
      this.ordersT += Number(order.total);
      this.totItems += Number(order.items)
    });
  }
}
