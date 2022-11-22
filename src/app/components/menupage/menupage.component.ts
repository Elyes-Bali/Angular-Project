import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderDetailsService } from 'src/app/service/order-details.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.scss']
})
export class MenupageComponent implements OnInit {
  a=0;
  OnAdd(){this.a++;}
  OnSupp(){this.a--;}
 

  constructor(private param:ActivatedRoute, private service:OrderDetailsService ,private cartService:CartService , ) { }
  getMenuId:any;
  menuData:any;
  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
       this.menuData= this.service.foodDetails.filter((value)=>{
       return value.id==this.getMenuId;
      });
      console.log(this.menuData,'menuData>>');
    }
  }
  addToCart(menuData: any){
    console.log(this.menuData)
    this.cartService.addTocart(menuData);
    window.alert('Your product has been added to the cart!');
  }

}
