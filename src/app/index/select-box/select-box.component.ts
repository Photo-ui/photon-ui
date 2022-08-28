import { Component, OnInit } from '@angular/core';
import {SelectBoxService} from "./select-box.service";

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  constructor(public service: SelectBoxService) { }

  ngOnInit(): void {
  }

}
