import { Component,OnInit } from '@angular/core';
import  productData from'../../assets/products-list.json';
import { Product } from '../interface/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  detail: Array<Product> = productData;
  constructor(private activeroute:ActivatedRoute){}
  product!:any
  ngOnInit() {
    let selected=this.activeroute.snapshot.params['id']
    console.log(selected)
    this.product=this.detail.find((val:any)=>val.id==selected)
    console.log(this.product)
  }
}
