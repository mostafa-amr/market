import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'market';
  routerOutletComponentClassName: string='';

  onActivate(event: any): void {
    console.log(event)
    this.routerOutletComponentClassName= event.constructor.name;
    console.log(event.constructor.name)
    
  }
}
