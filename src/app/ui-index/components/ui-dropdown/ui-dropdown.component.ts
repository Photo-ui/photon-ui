import { Component, OnInit } from '@angular/core';
import {UiDropdownService} from "./ui-dropdown.service";

@Component({
  selector: 'app-ui-dropdown',
  templateUrl: './ui-dropdown.component.html',
  styleUrls: ['./ui-dropdown.component.scss']
})
export class UiDropdownComponent implements OnInit {
  item: any;
  constructor(public  service: UiDropdownService) { }

  ngOnInit(): void {
  }

  show() {
    alert(this.item);
  }
}
