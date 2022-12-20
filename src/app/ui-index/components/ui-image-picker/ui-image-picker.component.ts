import { Component, OnInit } from '@angular/core';
import {ImageInfo} from "../../../ui-components/pi-image-picker/image-info";
import {UiImagePickerService} from "./ui-image-picker.service";

@Component({
  selector: 'app-ui-image-picker',
  templateUrl: './ui-image-picker.component.html',
  styleUrls: ['./ui-image-picker.component.scss']
})
export class UiImagePickerComponent implements OnInit {
  images: Array<ImageInfo> = [];
  toggle = true;
  rate = 4;
  constructor(public service: UiImagePickerService) { }

  ngOnInit(): void {
  }
}
