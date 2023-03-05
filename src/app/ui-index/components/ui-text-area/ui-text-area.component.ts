import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-floating-label-text-area',
  templateUrl: './ui-text-area.component.html',
  styleUrls: ['./ui-text-area.component.scss']
})
export class UiTextAreaComponent implements OnInit {

  textarea = `
  <pi-text-area label="Address" placeholder="Address"></pi-text-area>`;

  validate = `
  <pi-text-area [required]="true" [invalid]="true" label="Address" placeholder="Address"></pi-text-area>`;
  constructor() { }

  ngOnInit(): void {
  }

}
