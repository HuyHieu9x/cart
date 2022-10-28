import { Injectable } from '@angular/core';
import { Product } from '../module/product.module';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private loggerService: LoggerService) { 
      loggerService.log("Product Service Constructed");
  }

  public getProduct(){
    let products:Product[] = [];

    products = [
      new Product(1,'Neymar',500,'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bra-Cos_%281%29.jpg/800px-Bra-Cos_%281%29.jpg'),
      new Product(2,'Messi',750,'https://image.thanhnien.vn/w1024/Uploaded/2022/oqivotiw/2022_10_04/messi-3074.jpeg'),
      new Product(3,'Kaka',100,'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt98c1fbbd82cc443d/60de6eb5fd14d30f3eb7c7a0/4587caf178e1f9ceaa38acf1e64176098543a49c.jpg')
    ]

    this.loggerService.log(products);  
    return products;
  }    

}
