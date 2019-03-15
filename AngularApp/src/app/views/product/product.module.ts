import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';


@NgModule({
  imports: [
    FormsModule,
    ProductRoutingModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ProductComponent ]
})
export class ProductModule { }
