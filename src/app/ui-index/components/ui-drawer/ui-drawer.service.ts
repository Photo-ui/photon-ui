import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiDrawerService {
  text = `
  export class PiModalComponent implements OnInit {

  constructor(private drawerService: DrawerService) { }

  ngOnInit(): void {
  }

  open() {
    const ref = this.drawerService.open({
      content: CompDrawerComponent,
      data: null,
      position: "left",
      title: 'Panel Drawer'
    });

    ref.afterClosed$.subscribe((value) => {
      alert(JSON.stringify(value));
    })
  }
}


export class CompDrawerComponent implements OnInit {

  constructor(private ref: DrawerRef) { }

  ngOnInit(): void {
  }

  close(value?: string) {
    this.ref.close(value);
  }
}`;

  constructor() { }
}
