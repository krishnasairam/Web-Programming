import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from "./login/login.component";
import {MainComponent} from "./main/main.component";
import {RegisterComponent} from "./register/register.component";
import {CartComponent} from "./cart/cart.component";
import {UserdetailsComponent} from "./userdetails/userdetails.component";


const routes: Routes = [
  {path: "login", component:LoginComponent},
  {path: "main", component: MainComponent},
  {path: "register", component: RegisterComponent},
  {path: "cart" , component:CartComponent},
  {path:"userdetails", component: UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
