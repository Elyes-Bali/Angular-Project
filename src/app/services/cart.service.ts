import { Injectable } from '@angular/core';
import { MenupageComponent } from '../components/menupage/menupage.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: MenupageComponent[]=[];

  addTocart (product: MenupageComponent) {
    this. items. push(product);
    
    }
    
    getItems() {
    return this. items;
    
    }

    itemsCount(){
      return this.items.length;
    }
    
    clearcart() {
    this.items = [];
    return this. items;
    
    }

  constructor() { }
}
