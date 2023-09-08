import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartConfService } from '../services/cart-conf.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  counter!:number
  constructor(private activeroute:ActivatedRoute,private cartConfService:CartConfService){
  
  }
  ngOnInit(){
    this.cartConfService.getCounterVal().subscribe((valu:any)=>this.counter=valu)
  }
}
