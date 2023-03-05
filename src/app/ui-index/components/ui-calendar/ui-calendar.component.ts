import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-calendar',
  templateUrl: './ui-calendar.component.html',
  styleUrls: ['./ui-calendar.component.scss']
})
export class UiCalendarComponent implements OnInit {

  today = new Date();
  now = new Date();

  calBase = `
  <pi-calendar [(ngModel)]="today" (ngModelChange)="getDate($event)"></pi-calendar>
  
  <form [formGroup]="form">
    <pi-calendar formControlName="date"></pi-calendar>
  </form>
  `;

  calDisablePast = `
  <pi-calendar [disablePastDates]="true" [(ngModel)]="today" (ngModelChange)="getDate($event)"></pi-calendar>
  `;

  calComp = `
  export class UiCalendarComponent implements OnInit {
    today = new Date();
    form: FormGroup;
    constructor(private fb: FormBuilder) { }
  
    ngOnInit(): void {
      this.today = new Date(2021, 0, 1);
      
      this.form = this.fb.group({
        date: [new Date()]
      })
    }
  
    getDate(Event: Date) {
      alert(Event);
    }
  }
  `
  constructor() { }

  ngOnInit(): void {
    this.today = new Date(2021, 0, 1)
  }

  getDate(Event: Date) {
    alert(Event);
  }
}
