import {AfterContentChecked, AfterViewInit, Component, Input, OnInit, TemplateRef} from '@angular/core';
import {BaseService} from "../../base.service";
import {fromEvent} from "rxjs";

@Component({
  selector: 'pi-drop-list',
  templateUrl: './drop-list.component.html',
  styleUrls: ['./drop-list.component.scss']
})
export class DropListComponent implements OnInit, AfterViewInit, AfterContentChecked {
  @Input() id: string = BaseService.uuid();
  @Input() label = '';
  @Input() type: 'primary' | 'success' | 'danger' | 'warning' | 'info' = 'primary';
  dropWidth: any;
  primary = 'bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300';
  success = 'bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300';
  danger = 'bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-200';
  warning = 'bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:outline-none focus:ring-yellow-300';
  @Input() dropListTemplate: TemplateRef<any> | undefined;
  constructor() { }

  ngAfterContentChecked(): void {
    this.dropWidth = document.getElementById(this.id)?.clientWidth;
  }

  ngOnInit(): void {
  }

  dropListColor(): any {
    if (this.type === 'warning') {
      return this.warning
    }

    if (this.type === 'danger') {
      return this.danger
    }

    if (this.type === 'primary') {
      return this.primary
    }

    if (this.type === 'success') {
      return this.success
    }
  }

  ngAfterViewInit(): void {
    const ele = document.getElementById(this.id)!;
    fromEvent(ele,'click').subscribe({
      next:(_) => {
        const ele = document.getElementsByClassName('pi-drop-list-container');
        for (let i = 0; i< ele.length;i++) {
          if (!ele.item(i)?.classList.contains('hidden')) {
            ele.item(i)?.classList.add('hidden')
          }
        }
        document.getElementsByClassName(this.id).item(0)?.classList.remove('hidden');
      }
    })
  }

}
