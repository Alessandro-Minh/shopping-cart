import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-footer',
  templateUrl: './cart-footer.component.html',
})
export class CartFooterComponent {

numberSubtotal  : number = 100000000;  
numberVAT : number = 6000000;  
numberTotal : number = 150000000;  

}
