import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/service/order-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
    
  
  constructor(private service :OrderDetailsService) {
  
  }
 

  ngOnInit(): void { }
   
event(){
  
  
}

}
