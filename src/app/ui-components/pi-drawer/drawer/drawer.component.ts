import {Component, OnInit, TemplateRef, Type} from '@angular/core';
import {DrawerRef} from "../drawer-ref";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'pi-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
  animations: [
    trigger('leftEnterLeave', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in-out')
      ]),
      transition(':leave', [
        animate('200ms ease-in-out', style({ transform: 'translateX(-100%)' }))
      ])
    ]),
    trigger('rightEnterLeave', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('200ms 1ms ease-in-out')
      ]),
      transition(':leave', [
        animate('200ms 1ms ease-in-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class DrawerComponent implements OnInit {
  contentType!: 'template' | 'string' | 'component';
  content!: string | TemplateRef<any> | Type<any>;
  position: 'left' | 'right' | undefined = 'right';
  width: string | undefined = '400px';
  backdropClose: boolean | undefined = true;
  open = true;
  context: any;
  title?: string;
  constructor(private ref: DrawerRef) { }

  close() {
    this.open = false;
    this.ref.close(null);
  }

  ngOnInit(): void {
    this.content = this.ref.drawer.content;
    this.position = this.ref.drawer.position;
    this.title = this.ref.drawer.title;
    if (this.ref.drawer.width) {
      this.width = this.ref.drawer.width;
    }
    if (this.ref.drawer.backdropClose === undefined) {
      this.backdropClose = true;
    } else {
      this.backdropClose = this.ref.drawer.backdropClose;
    }

    if (typeof this.content === 'string') {
      this.contentType = 'string';
    } else if (this.content instanceof TemplateRef) {
      this.contentType = 'template';
      this.context = {
        close: this.ref.close.bind(this.ref)
      };
    } else {
      this.contentType = 'component';
    }
  }

}
