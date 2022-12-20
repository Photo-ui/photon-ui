import {
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  Component,
  forwardRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {BaseService} from "../../base.service";
import {Dropdown} from "../dropdown";
import {fromEvent} from "rxjs";

@Component({
  selector: 'pi-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => DropdownComponent)
    }
  ]
})
export class DropdownComponent implements OnInit, ControlValueAccessor, AfterViewInit, OnChanges, AfterContentChecked {
  @Input() id: string = BaseService.uuid();
  @Input() data: Array<Dropdown> = [];
  @Input() size: 'small' | 'normal' | 'large' = 'normal';
  onChange = (value: any | null) => {
  };
  hidden = true;
  selectedItem?: Dropdown | null;
  displayLabel = '';
  @Input() placeholder = '';
  displayValue: any;

  dropWidth: any;

  constructor() {

  }

  ngAfterContentChecked(): void {
    this.dropWidth = document.getElementById(this.id)?.clientWidth;
    }

  ngOnChanges(changes: SimpleChanges): void {
    this.dropWidth = document.getElementById(this.id)?.clientWidth;
  }


  writeValue(obj: any): void {
    this.selectedItem = this.data.find(u => u.id === obj);
  }

  ngOnInit(): void {
  }

  selectItem(item: Dropdown) {
    this.selectedItem = item;
    this.displayLabel = this.selectedItem.name;
    this.displayValue = this.selectedItem.id;
    this.onChange(item.id);
  }

  registerOnChange(fn: (value: any | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  ngAfterViewInit(): void {
    const ele = document.getElementById(this.id)!;
    fromEvent(ele,'click').subscribe({
      next:(_) => {
        const ele = document.getElementsByClassName('pi-droplist-container');
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
