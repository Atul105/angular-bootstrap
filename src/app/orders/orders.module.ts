import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes=[
  { path : "", children:[
    {path: "", component: OrdersComponent},
    {path: "list", component: ListComponent},
    {path: "create", component: CreateComponent},
    {path: "update", component: UpdateComponent},
    {path: "details", component:DetailsComponent},
  ]},
]

@NgModule({
  declarations: [
    OrdersComponent, CreateComponent, UpdateComponent, ListComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class OrdersModule { }
