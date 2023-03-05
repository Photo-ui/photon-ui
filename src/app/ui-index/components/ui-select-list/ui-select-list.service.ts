import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiSelectListService {
  list = [
    {
      id: 1,
      name: 'John Doe'
    },
    {
      id: 2,
      name: 'Sarah Conor'
    },
    {
      id: 2,
      name: 'Samuel Nimrod'
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
