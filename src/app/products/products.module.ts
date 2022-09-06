import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes=[
  { path : "products", children:[
    {path: "", component:ProductsComponent},
    {path: "list", component: ListComponent},
    {path: "create", component: CreateComponent},
    {path: "update", component: UpdateComponent},
    {path: "details", component:DeleteComponent},
  ]},
]

@NgModule({
  declarations: [
    ProductsComponent, CreateComponent, UpdateComponent, DeleteComponent,
    ListComponent
  ],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class ProductsModule { }
