import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { ListComponent } from './list/list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductApiService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


const routes: Routes=[
  { path : "", children:[
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
    CommonModule, HttpClientModule,ReactiveFormsModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  providers:[ProductApiService]
})
export class ProductsModule { }
