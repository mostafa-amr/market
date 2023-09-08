import { Component ,OnInit} from '@angular/core';
import  productData from'../../assets/products-list.json';
import { Product, apiData } from '../interface/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {
  data!:Array<Product>;  
  constructor(private productsService:ProductsService){}

  ngOnInit() {
  
   this.productsService.getProducts().subscribe((res: any) => this.data = res.products)
    
  }
}
