import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiLoaderService {
  text = `
  export class UiLoaderComponent implements OnInit {
    show = false;
    message = '';
    duration = 5000;
    constructor(public service: UiLoaderService) { }

    ngOnInit(): void {
    }

    open(): void {
      this.show = !this.show;
      const duration = timer(this.duration);
      duration.subscribe({
        next: (value) => {
          this.show = !this.show;
        }
      })
    }
  }
  `;

  textComp = `
  <pi-loader [show]="show" [loadingMessage]="message"></pi-loader>
  `
  constructor() { }
}
