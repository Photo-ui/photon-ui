import { Component, OnInit } from '@angular/core';
import {ModalRef} from "../../../ui-components/pi-modal/modal/modal-ref";

@Component({
  selector: 'app-comp-modal',
  templateUrl: './comp-modal.component.html',
  styleUrls: ['./comp-modal.component.scss']
})
export class CompModalComponent implements OnInit {

  constructor(private ref: ModalRef) { }

  ngOnInit(): void {
  }

  close(value?: string) {
    this.ref.close(value);
  }
}
