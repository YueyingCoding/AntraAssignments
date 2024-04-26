import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private $products: any = [
    {
      id: '1',
      title: 'Hammer',
      price: 12.99,
      date: new Date(2023, 2, 22),
      quantity: 10
    },
    {
      id: '2',
      title: 'Screwdriver',
      price: 10.99,
      date: new Date(2023, 2, 21),
      quantity: 15
    },
    {
      id: '3',
      title: 'Wrench',
      price: 8.99,
      date: new Date(2023, 2, 20),
      quantity: 5
    }
  ];

  constructor() { }

  get getData() {
    return this.$products;
  }
  set setData(value: any) {
    this.$products = [...this.$products, value];
  }
}
