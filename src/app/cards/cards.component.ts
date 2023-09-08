import { Component,Input } from '@angular/core';
import { Product } from '../interface/product';
import { CartConfService } from '../services/cart-conf.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
  counter:number=0
  constructor(private cartConfService:CartConfService){}
  ngOnInit(){
    this.cartConfService.getCounterVal().subscribe((valu:any)=>this.counter=valu)
  }
@Input() data!:Product

addToCart(id:any){
  
this.cartConfService.setListId(id)
this.cartConfService.setCounterVal(++this.counter)

}
}
