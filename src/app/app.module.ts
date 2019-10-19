import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CartHeaderComponent } from './cart-header/cart-header.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { CartFooterComponent } from './cart-footer/cart-footer.component';

import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { MyComponentComponent } from './my-component/my-component.component';

registerLocaleData(localeVi, 'vi');


@NgModule({
  declarations: [
    AppComponent,
    CartHeaderComponent,
    CartContentComponent,
    CartFooterComponent,
    MyComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
