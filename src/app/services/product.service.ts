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
}
