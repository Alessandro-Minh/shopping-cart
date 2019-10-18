import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
})
export class CartFooterComponent {

@Input() promoCode:string;  
@Input() numberSubtotal:number;  
@Input() numberVAT:number;  
@Input() numberTotal:number;  

applyPromoCode(){
  console.log(this.promoCode)
}

}


