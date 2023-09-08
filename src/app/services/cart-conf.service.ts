import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartConfService {
private counter=new BehaviorSubject<number>(0);
private idList=new BehaviorSubject<any[]>([])
  constructor() { }

  getListId(){
    return this.idList.asObservable();
  }


  setListId(id:any){
    let idList=this.idList.getValue()
if(idList.includes(id)){
  console.log('hala')
let changed:any
this.getCounterVal().subscribe((val)=>changed=val)
this.setCounterVal(changed-1)
}
else{
  idList.push(id)
  this.idList.next(idList)
}


  }
  getCounterVal(){
    return this.counter.asObservable();
  }


  setCounterVal(val:number){
    if(val>=0){
      this.counter.next(val)
    }
  }

}
