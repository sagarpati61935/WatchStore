import { Component, OnInit } from '@angular/core';
import {productService} from 'src/app/services/product.Service'
import {product} from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:product[]=[]

  constructor(private productService: productService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((products)=>{
      this.productList=products;
    })
  }

}
