import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import  {product } from 'src/app/models/product'
import { Observable} from 'rxjs';
import {productsUrl} from 'src/app/config/api'


@Injectable({
  providedIn: 'root'
})
export class productService {
           
             

  constructor(private http:HttpClient) { }
  getProducts():Observable<product[]>{
    return this.http.get<product[]>(productsUrl);
  }
}
