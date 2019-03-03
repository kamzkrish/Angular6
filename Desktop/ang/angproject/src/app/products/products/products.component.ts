import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers:[ProductsService]
})


export class ProductsComponent implements OnInit {


  prodout: string = 'Product-Lists';

  imagedisplay : boolean = true;

 products: any= [];


myClickfn(){


  this.imagedisplay = !this.imagedisplay;
 
}

  constructor(private _productservice : ProductsService) { }

  ngOnInit() {

  this._productservice.getProducts().subscribe((data) =>
  {
        this.products = data;
  });
  }


  ratefnparent(data:string){
  
    //this.prodout = data;

  }
}
