import { Component, OnInit } from '@angular/core';
import {ModalService} from "../../ui-components/modal/modal.service";
import {UiModalService} from "./ui-modal.service";
import {CompModalComponent} from "./comp-modal/comp-modal.component";

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
      size: "normal"
    });

    ref.afterClosed$.subscribe((value) => {
      alert(JSON.stringify(value));
    })
  }
}
