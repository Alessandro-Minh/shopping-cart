import { Injectable } from '@angular/core';
import { Product } from "./product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product [];

  getProducts() : Product[]{
    this.products = [
      {
        id: 1,
        name: "Alessandro Minh",
        descript: "Ông trùm",
        image:
          "https://scontent.fhan3-3.fna.fbcdn.net/v/t1.0-9/70427092_2978210222194545_1561733937997283328_n.jpg?_nc_cat=100&_nc_oc=AQnfQ76tIKJVkN3KI8Yorxp6Hz5ocsZ1YrHt6k6DSJTO_Uy2h9exH1rLL6iJswpjkMY&_nc_ht=scontent.fhan3-3.fna&oh=12b209e4ea0ea0595494b516b5a93cfa&oe=5E334199",
        price: 1000000,
        quantity: 1
      },
      {
        id: 2,
        name: "Ngọc Trinh",
        descript: "Siêu mẫu",
        image:
          "http://mcnews1.media.netnews.vn/netnews/archive/images/2019092908/tinngan_080306_970538850_0.jpg",
        price: 5000000,
        quantity: 10
      },
      {
        id: 3,
        name: "Honey",
        descript: "Hoa hậu",
        image:
          "https://scontent.fhan3-2.fna.fbcdn.net/v/t1.0-1/71144136_1305970192904644_9087907505618550784_n.jpg?_nc_cat=107&_nc_oc=AQmzX94LjbGlS2IyDaoTzsV25jMnXJmYMfwZP4viUrzYZPwhhNTpGbJENZHcFNAkhDY&_nc_ht=scontent.fhan3-2.fna&oh=b6cc549e2c73f68a22cdb09d2cbfe6d5&oe=5E6168F0",
        price: 10000000,
        quantity: 2
      }
    ];
    return this.products;
  }

  removeProduct(id:number){
    const index = this.products.findIndex(product => product.id === id);
    var cut = this.products[index].name;

    var tl = confirm("Do you want to delete " + cut +"?");
    if (tl) {      
      if (index !== -1) {
        this.products.splice(index, 1);
      }
      //this.onTinhToan();
    }
  }

  changeQuantity(cut){
    this.products.forEach(element => {
      if (element.id == cut.id) {
        element.quantity = cut.value * 1;
      }
    });
  }
  
}
