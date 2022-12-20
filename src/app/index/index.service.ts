import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IndexService {
public menu = [
  {
    path  : '/get-started',
    title: 'Get Started'
  },
  {
    path: '/components/buttons',
    title: 'Button'
  },
  {
    path: '/components/icon-button',
    title: 'Icon Button'
  },
  {
    path: '/components/input',
    title: 'Input'
  },
  {
    path: '/components/text-area',
    title: 'Text Area'
  },
  {
    path: '/components/select-list',
    title: 'Select List'
  },
  {
    path: '/components/check-box',
    title: 'Check Box'
  },
  {
    path: '/components/toggle',
    title: 'Toggle'
  },
  {
    path: '/components/drop-list',
    title: 'Drop List'
  },
  {
    path: '/components/modal',
    title: 'Modal'
  },
  {
    path: '/components/drawer',
    title: 'Drawer'
  },
  {
    path: '/components/loader',
    title: 'Loader'
  },
  {
    path: '/components/image-picker',
    title: 'Image Picker'
  },
  {
    path: '/components/avatar',
    title: 'Avatar'
  },
  {
    path: '/components/avatar-group',
    title: 'Avatar Group'
  }
]
  constructor() { }
}
