import {AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {ImageSearchboxItem} from "./image-searchbox-item";
import {BaseService} from "../base.service";

@Component({
  selector: 'pi-image-searchbox',
  templateUrl: './image-searchbox.component.html',
  styleUrls: ['./image-searchbox.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => ImageSearchboxComponent)
    }
  ]
})
export class ImageSearchboxComponent implements OnInit, ControlValueAccessor, AfterViewInit {
@Input() id: string = BaseService.uuid();
@Input() placeholder: string = '';
@Input() data: Array<ImageSearchboxItem> = [];
@Input() defaultValue: any;
@Input() showAddButton = true;
@Input() showSearchbox = true;
@Input() showImage: boolean | undefined = true;
@Input() searchable = false;
@Input() showIcon = false;
@Output() addNewItem = new EventEmitter();
@Output() getSelectedItem = new EventEmitter<ImageSearchboxItem>();
  onChange = (value: ImageSearchboxItem) => {
    // this.displayValue = value.id;
    // this.displayLabel=value.value;
  };
@Input() addLabel: string | undefined;
  newList:Array<ImageSearchboxItem> = [];
  hidden = true;
  selectedItem?: ImageSearchboxItem;
  displayLabel = '';
  displayValue: any;
  displayImage: any;
  constructor() {
  }

  ngOnInit(): void {
    this.newList = this.data;
    if (this.defaultValue) {
    this.selectItem(this.defaultValue);
  }
}

  selectItem(item: ImageSearchboxItem) {
    this.selectedItem = item;
    this.onChange(item.id);
    this.displayLabel = this.selectedItem.value;
    this.displayValue = this.selectedItem.id;
    this.displayImage = this.selectedItem?.image;
    this.getSelectedItem.emit(item);
    // console.log(item);
  }

  searchList(value: string) {
    this.data = this.newList;
    console.log('newList', this.data);
    this.data = [...this.data.filter((item) => String(item.value).toLowerCase().includes(value.toLowerCase()))];
  }

  addNew() {
    this.addNewItem.emit(this.displayLabel);
  }

  registerOnChange(fn: (value: ImageSearchboxItem) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  ngAfterViewInit(): void {
    document.getElementById(this.id)?.addEventListener('click', () => {
      const ele = document.getElementsByClassName('search-drop-container');
      for (let i = 0; i< ele.length;i++) {
        if (!ele.item(i)?.classList.contains('hidden')) {
          ele.item(i)?.classList.add('hidden')
        }
      }
      document.getElementsByClassName(this.id).item(0)?.classList.remove('hidden');
    })
  }
}
