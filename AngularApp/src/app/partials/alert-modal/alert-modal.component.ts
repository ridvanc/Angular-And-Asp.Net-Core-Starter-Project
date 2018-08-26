import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { BaseServiceResponse } from '../../common/models';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.scss']
})
export class AlertModalComponent implements OnInit {

  response: BaseServiceResponse;
  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    if (this.response.title === undefined) {
      this.response.title = 'Uyarı';
    }
  }

}
