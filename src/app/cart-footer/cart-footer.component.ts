import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
})
export class CartFooterComponent {

@Input() promoCode:string;  
@Input() numberSubtotal:number;  
@Input() numberVAT:number;  
@Input() numberTotal:number; 
@Input() numberGiamGia:number;

@Output() onApplyPromoCode = new EventEmitter();

applyPromoCode(promo:string){
  this.onApplyPromoCode.emit(promo);
}

}


