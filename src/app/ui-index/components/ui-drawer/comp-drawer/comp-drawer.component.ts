import { Component, OnInit } from '@angular/core';
import {DrawerRef} from "../../../../ui-components/pi-drawer/drawer-ref";

@Component({
  selector: 'app-comp-drawer',
  templateUrl: './comp-drawer.component.html',
  styleUrls: ['./comp-drawer.component.scss']
})
export class CompDrawerComponent implements OnInit {

  constructor(private ref: DrawerRef) { }

  ngOnInit(): void {
  }

  close(value?: string) {
    this.ref.close(value);
  }
}
