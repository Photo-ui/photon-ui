import { Component, OnInit } from '@angular/core';
import {UiIconButtonService} from "./ui-icon-button.service";

@Component({
  selector: 'app-ui-icon-button',
  templateUrl: './ui-icon-button.component.html',
  styleUrls: ['./ui-icon-button.component.scss']
})
export class UiIconButtonComponent implements OnInit {

  constructor(public service: UiIconButtonService) { }

  ngOnInit(): void {
  }

}
