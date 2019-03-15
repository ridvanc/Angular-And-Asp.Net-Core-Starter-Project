import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../../services/values.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  isLoading = true;
  products = [];
  constructor(private valuesService: ValuesService) { }

  ngOnInit() {
    this.valuesService.getValues(90).subscribe(response => {
      this.isLoading = false;
      this.products = response as Array<any>;
    });
  }

}
