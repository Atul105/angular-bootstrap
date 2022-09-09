import { Component, OnInit } from '@angular/core';
import { ProductApiService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productSrv : ProductApiService, private router:Router) { }

  public productsList:any;

  ngOnInit(): void {

    //get all products
   this.getAllProducts();

  }
  
  public getAllProducts(){
   
    this.productSrv.getProducts().subscribe((response: any) =>{
    // console.log(res);
    this.productsList = response;
    });
  }

  //product update
  public onEdit(product:any){
  // console.log(product);
  this.router.navigateByUrl('/products/update',{ state:product});
  
  }
  public onDelete(product:any){
    // console.log(product);
    this.productSrv.deleteProduct(product).subscribe((response: any)=>{
      console.log("Product is deleted sucessfully"); 
      //reload the products list
      this.getAllProducts(); 
    })
  }
}
