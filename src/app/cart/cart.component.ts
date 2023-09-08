import { Component } from '@angular/core';
import { Product, apiData } from '../interface/product';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute } from '@angular/router';
import { CartConfService } from '../services/cart-conf.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  counter:number=0
  itemCounter:number=1
  price:number=0
  selected:any
  itemId:any
  cartItems:any[]=[]
  constructor(private activeroute:ActivatedRoute,private productsService:ProductsService,private cartConfService:CartConfService){
    this.ay7aga()
  }
  ngOnInit() {
    this.cartConfService.getCounterVal().subscribe((valu:any)=>this.counter=valu)
      this.cartConfService.getListId().subscribe((val:any)=>this.itemId=val)
    console.log('yes this is the de7k',this.itemId)
    // this.selected=this.activeroute.snapshot.params['id']
    for(let i:number =0;i<this.itemId.length;i++){
     this.productsService.getCartItme(this.itemId[i]).subscribe((res: any) => {
      this.selected=res
      this.selected.numbers=1
      console.log(this.selected)
      this.cartItems.push(this.selected)
      this.price+=this.cartItems[i].price
    })
    
  }
  // console.log(this.selected)
}
ay7aga(){
//  this.cartItems.push(this.selected)

}
addCounter(cal:any,i:any,id:any){
  this.cartConfService.setCounterVal(++this.counter)
 cal++
  this.cartItems[i].numbers=cal
  let price =this.cartItems[i].price
  price=price/(cal-1)
  // console.log(price)
  this.price+=price
  console.log(this.price)
  this.cartItems[i].price = price*cal

}
minCounter(cal:any,i:any){
  if(this.counter!=0&&cal!=1){
    this.cartConfService.setCounterVal(--this.counter)

  }
  if(cal!=1){
   
  cal--
  this.cartItems[i].numbers=cal
  let price =this.cartItems[i].price
  price=price/(cal+1)
  // console.log(price)
  this.price-=price
  console.log(this.price)
  this.cartItems[i].price = price*cal
  }
 
}
removeItem(index:any,id:any,Rcounter:any,allPrice:any){
this.cartItems.splice(index,1)
console.log(this.cartItems)
this.itemId.splice(this.itemId.indexOf(id),1)
this.price-=allPrice
this.cartConfService.setCounterVal(this.counter-Rcounter)
console.log(this.itemId)
}
}
