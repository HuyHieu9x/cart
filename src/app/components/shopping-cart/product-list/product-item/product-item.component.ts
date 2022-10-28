import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/module/product.module';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'] ,
  providers : [ProductService]
})

export class ProductItemComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService : ProductService) {}

  getProducts(){
    this.products = this.productService.getProduct();
  }

  ngOnInit(): void {
  }

}
