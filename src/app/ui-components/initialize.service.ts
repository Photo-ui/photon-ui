import { Injectable } from '@angular/core';
import {fromEvent} from "rxjs";

@Injectable()
export class InitializeService {

  constructor() {
    fromEvent(document, 'click')
        .subscribe({
          next: (_) => {
            if (!document.activeElement?.attributes.getNamedItem('pi-dropdown')) {
              const ele = document.getElementsByClassName('pi-droplist-container');
              for (let i = 0; i< ele.length;i++) {
                if (!ele.item(i)?.classList.contains('hidden')) {
                  ele.item(i)?.classList.add('hidden')
                }
              }
            }
            if (!document.activeElement?.attributes.getNamedItem('pi-drop-down')) {
              const ele = document.getElementsByClassName('pi-drop-list-container');
              for (let i = 0; i< ele.length;i++) {
                if (!ele.item(i)?.classList.contains('hidden')) {
                  ele.item(i)?.classList.add('hidden')
                }
              }
            }
            if (!document.activeElement?.attributes.getNamedItem('select-list')) {
              const ele = document.getElementsByClassName('select-list-container');
              for (let i = 0; i< ele.length;i++) {
                if (!ele.item(i)?.classList.contains('hidden')) {
                  ele.item(i)?.classList.add('hidden')
                }
              }
            }
          }
        })
  }
}
