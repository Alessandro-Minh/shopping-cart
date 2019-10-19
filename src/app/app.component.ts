import { Component, OnInit, DoCheck } from "@angular/core";
import { Product } from "./product.model";
import { ProductService } from "./product.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, DoCheck {
  title = "Alessandro Minh đẹp trai";

  products: Product[];

  promoCode: string = "";
  numberSubtotal: number = 0;
  numberVAT: number = 0;
  numberTotal: number = 0;
  numberItems: number = 0;
  numberGiamGia: number = 0;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    //this.onTinhToan();
    this.products = this.productService.getProducts();
  }

  ngDoCheck() {
    this.onTinhToan();
  }

  handleRemoveProduct(id: number) {
    this.productService.removeProduct(id);
  }

  handleChangeQuantity(cut) {
    this.productService.changeQuantity(cut);
    //this.onTinhToan();
  }

  handleApplyPromoCode(promo: string) {
    this.promoCode = promo;
  }

  onGiamGia() {
    if (this.promoCode == "minh") {
      //alert("Discount 10.000.000 VND!!!");
      this.numberTotal -= 10000000;
      if (this.numberTotal < 0) {
        this.numberTotal = 0;
      }
      this.numberGiamGia = -10000000;
    } else {
      //alert("Incorrect Code!!!");
      this.numberGiamGia = 0;
    }
    
  }

  onTinhToan() {
    this.numberGiamGia = 0;
    this.numberItems = 0;
    this.numberSubtotal = 0;
    this.numberVAT = 0;
    this.numberTotal = 0;

    this.products.forEach(element => {
      this.numberItems += element.quantity;
      this.numberSubtotal += element.price * element.quantity;
    });
    this.numberVAT = this.numberSubtotal * 0.1;
    this.numberTotal = this.numberSubtotal + this.numberVAT;
    this.onGiamGia();
  }
}
