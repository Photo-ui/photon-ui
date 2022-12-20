import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiModalService {
  text = `
  export class PiModalComponent implements OnInit {

  constructor(private modalService: ModalService) { }

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


export class CompModalComponent implements OnInit {

  constructor(private ref: ModalRef) { }

  ngOnInit(): void {
  }

  close(value?: string) {
    this.ref.close(value);
  }
}`;

  constructor() { }
}
