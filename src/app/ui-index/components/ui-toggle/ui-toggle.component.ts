import { Component, OnInit } from '@angular/core';
import {UiToggleService} from "./ui-toggle.service";

@Component({
  selector: 'app-ui-toggle',
  templateUrl: './ui-toggle.component.html',
  styleUrls: ['./ui-toggle.component.scss']
})
export class UiToggleComponent implements OnInit {
  toggle = true;
  constructor(public service: UiToggleService) { }

  ngOnInit(): void {
  }


}
