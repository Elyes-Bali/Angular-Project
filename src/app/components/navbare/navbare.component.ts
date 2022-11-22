import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-navbare',
  templateUrl: './navbare.component.html',
  styleUrls: ['./navbare.component.scss']
})
export class NavbareComponent implements OnInit {

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
  }
  itemCount(){
    return this.cartService.itemsCount();
  }
}
