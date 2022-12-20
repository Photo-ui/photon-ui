import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-avatar-group',
  templateUrl: './ui-avatar-group.component.html',
  styleUrls: ['./ui-avatar-group.component.scss']
})
export class UiAvatarGroupComponent implements OnInit {

  images = [
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png'
  ];

  avGrp = `
  <pi-avatar-group [images]="images" rounded></pi-avatar-group>
  `;

  avGrpComponent = `
  export class UiAvatarGroupComponent implements OnInit {
  
    images = [
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png',
    'assets/avatar.png'
    ];
    
    constructor() { }
    
    ngOnInit(): void {
    }
    
  }
  `;

  avGrpRounded = `
  <pi-avatar-group [images]="images" rounded></pi-avatar-group>
    `;

  avGrpRoundedNone = `
  <pi-avatar-group [images]="images" rounded="none"></pi-avatar-group>
  `;

  avGrpNoRounded =`
  <pi-avatar-group [images]="images"></pi-avatar-group>
  `;

  avGrpMaxCount = `
  <pi-avatar-group [maxCount]="4" [images]="images" rounded></pi-avatar-group>
  `;
  constructor() { }

  ngOnInit(): void {
  }

}
