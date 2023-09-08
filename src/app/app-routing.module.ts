import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from './items-list/items-list.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NothereComponent } from './nothere/nothere.component';
import { AboutComponent } from './about/about.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:'',
    component:ItemsListComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'sign-up',
    component:SignupComponent
  },
  {
    path:'cart',
    component:CartComponent
  },
  {
    path:'Details/:id',
    component:AboutComponent
  },
  {
    path:'**',
    component: NothereComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
