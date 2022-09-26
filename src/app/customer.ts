export interface ICustomer {
    id: number,
    name: string,
    address: string,
    city: string,
    orders: any,
    selected: boolean
}

export interface IOrder {
    id: number,
    total: number,
    items: number,
    selected: boolean
}
