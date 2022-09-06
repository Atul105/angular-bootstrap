import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrdersModule } from './orders/orders.module';
import { ProductsModule } from './products/products.module';

const routes: Routes = [
  { path : "", redirectTo: '/home', pathMatch:"full"},  
  { path : "home", component: HomeComponent},
  { path : "about", component: AboutComponent},
  { path : "login", component: LoginComponent},
  { path : "register", component: RegisterComponent},
  //{ path : "**", component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    OrdersModule,
    ProductsModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
