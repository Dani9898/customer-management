import { Component, OnInit } from '@angular/core';
import { ICustomer } from '../customer';
import { CustomerSelectedService } from '../customer-selected.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent {

  public customers: ICustomer[] = [];

  constructor(private _customerSelectedService: CustomerSelectedService) { }

  /**
   * Apre il dettaglio del cliente selezionato
   * @param customer Istanza del cliente selezionato
   */
   onCustomerClicked(customer: ICustomer) {
    this._customerSelectedService.sendCustomer(customer);
  }

  /**
   * Imposta la proprietà selected del Customer selezionato.
   * Ho modificato questo metodo perchè non serve ciclare l'array se ti passi il client dal template HTML
   * La proprietà selected del customer è già binded alla proprietà checked per cui basta impostare il
   * valore contrario a quello già selezionato.
   * @param $event Dati evento
   * @param customer Customer corrente
   */
  onChangeCustomer($event: Event, customer: ICustomer) {
    customer.selected = !customer.selected;
  }

  /**
   * Aggiunge un Customer.
   * Bisogna usare questo tipo di commento perchè in questo modo quando sei con il puntatore
   * del mouse sopra un metodo, ti fa vedere il commento anche se sei in un altro componente.
   */
  addCustomer() {
    let customer = {} as ICustomer;
    customer.id = this.customers.length + 1
    customer.name = `Customer ${this.customers.length + 1}`
    customer.address = "";
    customer.city = ""
    customer.orders = [];
    customer.selected = false;
    this.customers.push(customer);
  }

  /**
   * Rimuove i clienti selezionati
   * Qui la rimozione puoi farla direttamente.
   */
  removeCustomer() {
    this.customers = this.customers.filter(customer => !customer.selected);
  }
}