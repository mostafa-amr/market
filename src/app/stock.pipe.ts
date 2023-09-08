import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stock'
})
export class StockPipe implements PipeTransform {

  transform(value: number): any {
    let decesion=''
    if(value==0){
      decesion='out of stock mate'
    }
    else{
      decesion='in stock'
    }
    return decesion;
  }

}
