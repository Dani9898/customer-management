export interface ICustomer {
    name: string,
    address: string,
    city: string
    [orders: number]: {
        orderNumber: number, 
        total: number, 
        items : number
    }
}