import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICustomer } from '../customer';
// import { CustomerSelectedService } from '../customer-selected.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  @Input("parentData") public customer: ICustomer | undefined;

  // dati per assegnare i nuovi valori di ogni ordine
  public orderId: number = -1;
  public orderT: number = -1;
  public orderItems: number = -1;

  constructor() { }

  ngOnInit(): void {
  }

  // cambia la proprietà selected dell'ordine da vero a falso o viceversa quando si spunta la checkbox
  onChangeOrder($event: Event){
    const target = $event.target as HTMLInputElement;
    const id = Number(target.value);
    const isChecked = target.checked;
    
    for(let i = 0; i < this.customer?.orders.length; i++){
      let order = this.customer?.orders[i];
      if(order.id === id){
        order.selected = isChecked;
      }
    }    
  }

  // cambia la proprietà selected di tutti gli ordini da vero a falso o viceversa quando si spunta la checkbox
  onChangeOrders($event: Event){
    const target = $event.target as HTMLInputElement;
    const isChecked = target.checked;
    this.customer?.orders.map(order => {
      order.selected = isChecked;
    })
  }

  // edita la voce dell'ordine cliccata
  edit(id: number, orderElement: number, element: string ){
    switch (element) {
      case 'total': 
        this.orderId = id;
        this.orderT = orderElement;
        this.showDOMelement("editTotal");
      break;
      case 'items':
        this.orderId = id;
        this.orderItems = orderElement;
        this.showDOMelement("editItems");
      break;
    }
  }

  // salva la voce dell'ordine cliccata
  save(element: string){
    switch (element) {
      case 'total': 
        for(let i = 0; i < this.customer?.orders.length; i++){
          let order = this.customer?.orders[i];
          if(order.id === this.orderId){
            order.total = Number(this.orderT);           
          }
          this.hideDOMelement("editTotal")
        }
      break;

      case 'items':
        for(let i = 0; i < this.customer?.orders.length; i++){
          let order = this.customer?.orders[i];
          if(order.id === this.orderId){
            order.items = Number(this.orderItems); 
          }
          this.hideDOMelement("editItems")
        }
    }   
  }

  // mostra un elemento del dom
  showDOMelement(e: string){
    let element = document.getElementById(e);
    element?.classList.remove("hidden");
    element?.classList.add("visible");  
  }

  // nasconde un elemento del dom
  hideDOMelement(e:string){
    let element = document.getElementById(e);
    element?.classList.remove("visible");
    element?.classList.add("hidden");  
  }
}
