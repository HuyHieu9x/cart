export class Product { 
    constructor(productID:number,name: string ,price:number, image:string) {
        this.productID=productID;
        this.name=name;
        this.price=price;
        this.image=image;
    }
 
    productID: number ;
    name: string ;
    price: number;
    image: string;
}