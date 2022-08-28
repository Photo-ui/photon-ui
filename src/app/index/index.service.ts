import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
public menu = [
  {
    path: '/button',
    title: 'Button'
  },
  {
    path: '/input',
    title: 'Input'
  },
  {
    path: '/select-box',
    title: 'Select Box'
  },
  {
    path: '/image-select-box',
    title: 'Image Select Box'
  },
  {
    path: '/modal',
    title: 'Modal'
  },
  {
    path: '/check-list',
    title: 'Check List'
  },
  {
    path: '/dynamic-forms',
    title: 'Dynamic Forms'
  }
]
  constructor() { }
}
