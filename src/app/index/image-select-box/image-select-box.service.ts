import { Injectable } from '@angular/core';
import {SearchItem} from "../../ui-components/search-box/search-item";
import {ImageSearchboxItem} from "../../ui-components/image-searchbox/image-searchbox-item";

@Injectable({
  providedIn: 'root'
})
export class ImageSelectBoxService {
  list: ImageSearchboxItem[] = [
    {
      id: 1,
      value: 'John Doe',
      image: ''
    },
    {
      id: 2,
      value: 'Sarah Conor',
      image: ''
    },
    {
      id: 2,
      value: 'Samuel Nimrod',
      image: ''
    }
  ];

  text = `
  export class ImageSelectBoxComponent implements OnInit {
  
  list: ImageSearchboxItem[] = [
    {
      id: 1,
      value: 'John Doe',
      image: ''
    },
    {
      id: 2,
      value: 'Sarah Conor',
      image: ''
    },
    {
      id: 2,
      value: 'Samuel Nimrod',
      image: ''
    }
  ];
  
  constructor() { }

  ngOnInit(): void {
  }
  
  }`;

  searchItemText = `
  export class ImageSearchboxItem {
    id: any;
    value: any;
    image: any;
  }`;
  constructor() { }
}
