import { Component, OnInit } from '@angular/core';
import {IndexService} from "../../index/index.service";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor(public service: IndexService) { }

  ngOnInit(): void {
  }

}
