import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { apiData } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get('https://dummyjson.com/products')
  }
  getCartItme(id:string|number){
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
