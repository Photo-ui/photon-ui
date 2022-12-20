import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiToggleService {
  textComp = `
  <pi-toggle [(ngModel)]="toggle" (ngModelChange)="comm($event)"></pi-toggle>
  `
  constructor() { }
}
