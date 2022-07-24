import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pi-quick-code',
  templateUrl: './quick-code.component.html',
  styleUrls: ['./quick-code.component.scss']
})
export class QuickCodeComponent implements OnInit {
  @Input() color!: 'primary' | 'danger' | 'warning' | 'info' | 'success'
  constructor() { }

  ngOnInit(): void {
  }

}
