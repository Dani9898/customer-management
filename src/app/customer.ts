export interface ICustomer {
    name: string,
    address: string,
    city: string
    orders:[
        {orderNumber: number, total: number, items : number}
    ]
}