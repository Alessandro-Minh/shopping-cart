import { Component, Input } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
})
export class CartContentComponent {
  @Input() products:Product[];

  removeProduct(id:number){
    var tl = confirm("Do you want to delete?")
    if (tl) {
      const index = this.products.findIndex(product => product.id === id);
      var cut = this.products[index].name;
      if (index !== -1) {
        this.products.splice(index,1);        
      }
      alert("Đã xoá " + cut);
    }
  }
  
  inputQuantity(id:number, inputElement:HTMLInputElement){
    console.log(id, inputElement.value);
  }



}
