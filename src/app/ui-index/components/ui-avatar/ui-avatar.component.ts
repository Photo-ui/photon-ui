import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-avatar',
  templateUrl: './ui-avatar.component.html',
  styleUrls: ['./ui-avatar.component.scss']
})
export class UiAvatarComponent implements OnInit {

  image = 'assets/avatar.png';

  avSizes = `
  <pi-avatar [image]="image" size="small" rounded></pi-avatar>
  <pi-avatar [image]="image" rounded></pi-avatar>
  <pi-avatar [image]="image" size="large" rounded></pi-avatar>
  <pi-avatar [image]="image" size="extra large" rounded></pi-avatar>
  `;

  avComponent = `
  export class UiAvatarComponent implements OnInit {
  
    image = 'assets/avatar.png';
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
  }
  `;

  avRounded = `
  <pi-avatar [image]="image" size="large" rounded></pi-avatar>
    `;

  avRoundedNone = `
  <pi-avatar [image]="image" size="large" rounded="none"></pi-avatar>
  `;

  avNoRounded =`
  <pi-avatar [image]="image" size="large"></pi-avatar>
  `;

  avInitials = `
  <pi-avatar initials="BO" rounded></pi-avatar>
  `;

  avEmpty = `
  <pi-avatar rounded></pi-avatar>
  <pi-avatar rounded="none"></pi-avatar>
  <pi-avatar ></pi-avatar>
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
