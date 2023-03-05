import { Component, OnInit } from '@angular/core';
import {IndexService} from "../../index/index.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  collapse = false;
  constructor(public service: IndexService) { }

  ngOnInit(): void {
  }

  collapseMenu = () => {
    this.collapse = !this.collapse;
  }
}
