import { Component, OnInit } from '@angular/core';
import {ImageSelectBoxService} from "./image-select-box.service";

@Component({
  selector: 'app-image-select-box',
  templateUrl: './image-select-box.component.html',
  styleUrls: ['./image-select-box.component.scss']
})
export class ImageSelectBoxComponent implements OnInit {

  constructor(public service: ImageSelectBoxService) { }

  ngOnInit(): void {
  }

}
