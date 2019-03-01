import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';


@NgModule({
  imports: [
    FormsModule,
    ProductRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [ ProductComponent ]
})
export class ProductModule { }
