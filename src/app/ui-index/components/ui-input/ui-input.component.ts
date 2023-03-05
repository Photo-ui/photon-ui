import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-floating-label-input',
  templateUrl: './ui-input.component.html',
  styleUrls: ['./ui-input.component.scss']
})
export class UiInputComponent implements OnInit {
  inp = `
  <pi-input label="First name" placeholder="First name"></pi-input>`;

  inputSizes = `
<pi-input size="small" label="Small" placeholder="Small"></pi-input>
<pi-input label="Default" placeholder="Default"></pi-input>
<pi-input size="large" label="Large" placeholder="Large"></pi-input>
`;
  constructor() { }

  ngOnInit(): void {
  }

}
