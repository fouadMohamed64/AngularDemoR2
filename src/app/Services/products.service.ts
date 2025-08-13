import { Injectable } from '@angular/core';
import { IProduct } from '../Modles/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduct[];

  constructor() {
    this.products = [
      { id: 1, name: 'BMW', quantity: 2, price: 8000, productImage: 'assets/Images/car.jpeg', productCategory: 1 },
      { id: 2, name: 'Merceds-Benz', quantity: 0, price: 18000, productImage: 'assets/Images/car.jpeg', productCategory: 1 },
      { id: 3, name: 'Hawaii', quantity: 5, price: 4000, productImage: 'assets/Images/phone.jpeg', productCategory: 2 },
      { id: 4, name: 'Iphone', quantity: 7, price: 9000, productImage: 'assets/Images/phone.jpeg', productCategory: 2 },
      { id: 5, name: 'Dell', quantity: 1, price: 19000, productImage: 'assets/Images/laptop.jpeg', productCategory: 3 },
      { id: 6, name: 'Mac', quantity: 3, price: 15000, productImage: 'assets/Images/laptop.jpeg', productCategory: 3 },
      { id: 7, name: 'Casio', quantity: 4, price: 15000, productImage: 'assets/Images/watch.jpeg', productCategory: 4 },
      { id: 8, name: 'Rado', quantity: 0, price: 13000, productImage: 'assets/Images/watch.jpeg', productCategory: 4 },
    ];
  }

  getAllProducts(): IProduct[] {
    return this.products
  }

  getProductById(id: number): IProduct | null {
    let product = this.products.find((ele) => ele.id == id);
    return product ? product : null;
  }

  getProductsByCategoryId(categoryId: number): IProduct[] {
    return this.products.filter((ele) => ele.productCategory == categoryId);
  }

}
