import { Injectable } from '@angular/core';
import {SearchItem} from "../../ui-components/search-box/search-item";

@Injectable({
  providedIn: 'root'
})
export class SelectBoxService {
  list: SearchItem[] = [
    {
      id: 1,
      value: 'John Doe'
    },
    {
      id: 2,
      value: 'Sarah Conor'
    },
    {
      id: 2,
      value: 'Samuel Nimrod'
    }
  ];

  text = `
  export class SelectBoxComponent implements OnInit {
  
  list: SearchItem[] = [
    {
      id: 1,
      value: 'John Doe'
    },
    {
      id: 2,
      value: 'Sarah Conor'
    },
    {
      id: 2,
      value: 'Samuel Nimrod'
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  }`;

  searchItemText = `
  export class SearchItem {
    id: any;
    value: any;
  }`;
  constructor() { }
}
