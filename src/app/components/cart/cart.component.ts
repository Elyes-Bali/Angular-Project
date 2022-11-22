import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
 
 

  constructor(private cartService:CartService) { }
  items:any;
  ngOnInit(): void {
    this.items=this.cartService.getItems();
    console.log(this.items);
  }
  


}
