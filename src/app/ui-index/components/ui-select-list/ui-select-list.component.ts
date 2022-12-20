import { Component, OnInit } from '@angular/core';
import {UiSelectListService} from "./ui-select-list.service";

@Component({
  selector: 'app-ui-select-list',
  templateUrl: './ui-select-list.component.html',
  styleUrls: ['./ui-select-list.component.scss']
})
export class UiSelectListComponent implements OnInit {
  item: any
  constructor(public service: UiSelectListService) { }

  ngOnInit(): void {
  }

  display() {
    alert(this.item);
  }
}
