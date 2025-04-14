import { Injectable } from '@angular/core'; // Importing Injectable decorator
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'  // This @Injectable (service) is available throughout the app
})
export class CartService {
  cart: IProduct[] = [];

  constructor() {}

  add(product: IProduct) {
    this.cart.push(product);
    console.log(`product ${product.name} added to cart`);
  }
}
