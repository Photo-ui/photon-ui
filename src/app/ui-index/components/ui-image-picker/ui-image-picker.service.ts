import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiImagePickerService {
  text = `
    export class UiImagePickerComponent implements OnInit {
        images: Array<ImageInfo> = [];
        toggle = true;
        rate = 4;
        constructor() { }

        ngOnInit(): void {
        }
    }
  `;

  textComp = `
  <pi-image-picker [type]="'multiple'" (imageAdded)="images = $event"></pi-image-picker>
  `
  constructor() { }
}
