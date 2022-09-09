import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  private url:string="http://localhost:8090/products";

  constructor(private httpClient : HttpClient) { }

  //get all method
  public getProducts(){
    return this.httpClient.get(this.url);
  }

  //create a method
  public addProduct(product:any){
    return this.httpClient.post(this.url, product);
  }

  //update a product
  public updateProduct(product:any){
    return this.httpClient.put(this.url, product);
  }

   //delete a method
  public deleteProduct(product:any){
    return this.httpClient.delete(this.url +"/"+product.id);
  }
}
