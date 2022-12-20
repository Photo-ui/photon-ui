import { Component, OnInit } from '@angular/core';
import {UiLoaderService} from "./ui-loader.service";
import {interval, take, timer} from "rxjs";

@Component({
  selector: 'app-ui-loader',
  templateUrl: './ui-loader.component.html',
  styleUrls: ['./ui-loader.component.scss']
})
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
