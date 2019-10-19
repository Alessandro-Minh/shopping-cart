import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
})
export class CartContentComponent {
  @Input() products:Product[];

  @Output() onRemoveProduct = new EventEmitter();

  @Output() onInputQuantity = new EventEmitter();

  removeProduct(id:number) {
    this.onRemoveProduct.emit(id);
  }
  
  inputQuantity(id:number, inputElement:HTMLInputElement){
    if (parseInt(inputElement.value)>=0){
    } else {
      inputElement.value = '0';
    }
    this.onInputQuantity.emit({id:id, value:inputElement.value});
  }



}
