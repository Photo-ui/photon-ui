import { Component, OnInit } from '@angular/core';
import {UiModalService} from "./ui-modal.service";
import {CompModalComponent} from "./comp-modal/comp-modal.component";
import {ModalService} from "../../../ui-components/pi-modal/modal/modal.service";

@Component({
  selector: 'app-ui-modal',
  templateUrl: './ui-modal.component.html',
  styleUrls: ['./ui-modal.component.scss']
})
export class UiModalComponent implements OnInit {
  constructor(private modalService: ModalService, public service: UiModalService) {
  }

  ngOnInit(): void {
  }

  open() {
    const ref = this.modalService.open({
      content: CompModalComponent,
      data: null,
      size: "normal",
      backdropClose: true
    });

    ref.afterClosed$.subscribe((value: any) => {
      // alert(JSON.stringify(value));
    })
  }
}
