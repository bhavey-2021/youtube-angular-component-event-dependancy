import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buy-products',//might have to change to app-buy-products
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productSelected:boolean =false  ; // by default kept false so that we can see 'Line 1' by default
  addedProduct:any;

  selectedProduct: string | undefined;
  onSelectProduct(product: string | undefined){
    this.productSelected=true;
    this.selectedProduct = product;
  }
  onAddProduct() //we need to send the value of selectedProduct in the top bar of checkout
  {
  this.addedProduct=this.selectedProduct;
  }
  }
