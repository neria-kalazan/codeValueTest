import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {Product} from '../interfaces';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  public productList: Product[] = [
    {
      id: 1,
      name: 'product No` 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis quis urna non posuere. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas molestie',
      img: 'https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png',
      price: 234,
      created: moment().toDate(),
    },
    {
      id: 2,
      name: 'aproduct No` 2 product No` 2',
      description: 'this is product number 2!',
      img: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      price: 22,
      created: moment().toDate(),
    },
    {
      id: 3,
      name: 'product No` 3',
      description: 'this is product number 3!',
      img: 'https://img.alicdn.com/tfs/TB1g.mWZAL0gK0jSZFtXXXQCXXa-200-200.svg',
      price: 34,
      created: moment().toDate(),
    },

  ];
  private lastId = 3;

  constructor() {
    const products = localStorage.getItem('productList');
    if (!products) {
      localStorage.setItem('productList', JSON.stringify(this.productList));
    } else {
      this.productList = JSON.parse(products);
    }
  }

  getUniqeId(): number {
    const last = localStorage.getItem('lastId');
    if (last) {
      this.lastId = JSON.parse(last) + 1;
    } else {
      this.lastId++;
    }
    localStorage.setItem('lastId', JSON.stringify(this.lastId));
    return this.lastId;
  }

  getProductList(): Observable<Product[]> {
    return of(this.productList);
  }

  getProduct(productId: number): Observable<Product> {
    const product = this.productList.filter((p) => { return p.id === productId; });
    if (!product.length) return throwError('Invalid ID');
    return of(product[0]);
  }

  saveProduct(product: any): Observable<Product> {
    if (!product.id) {
      product.id = this.getUniqeId();
      product.created = moment().toDate();
      this.productList.push(product);
    } else {
      const productIdx = this.productList.findIndex((p) => { return p.id === product.id; });
      this.productList[productIdx].name = product.name;
      this.productList[productIdx].description = product.description;
      this.productList[productIdx].price = product.price;
      this.productList[productIdx].img = product.img;
    }
    localStorage.setItem('productList', JSON.stringify(this.productList));
    return this.getProduct(product.id);
  }

  removeProduct(productId: number): Observable<boolean> {
    this.productList = this.productList.filter((p) => { return p.id !== productId; });
    localStorage.setItem('productList', JSON.stringify(this.productList));
    return of(true);
  }

}
