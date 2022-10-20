import {AfterViewInit, Component, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {SearchItem} from "./search-item";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {BaseService} from "../base.service";

@Component({
  selector: 'pi-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SearchBoxComponent)
    }
  ]
})
export class SearchBoxComponent implements OnInit, ControlValueAccessor, AfterViewInit {
  @Input() id: string = BaseService.uuid();
  @Input() placeholder: string = '';
  @Input() data: Array<SearchItem> = [];
  @Input() showAddButton = true;
  @Input() searchable = false;
  @Input() showIcon = false;
  @Output() addNewItem = new EventEmitter();
  @Output() getSelectedItem = new EventEmitter<SearchItem>();
  onChange = (value: SearchItem) => {};

  newList:Array<SearchItem> = [];
  hidden = true;
  selectedItem?: SearchItem;
  displayLabel = '';
  displayValue: any;
  constructor() {
  }

  ngOnInit(): void {

    this.newList = this.data;
  }

  selectItem(item: SearchItem) {
    this.selectedItem = item;
    this.displayLabel = this.selectedItem.value;
    this.displayValue = this.selectedItem.id;
    this.getSelectedItem.emit(item);
    this.onChange(item.id);
  }

  searchList(value: string) {
    this.data = this.newList;
    this.data = [...this.data.filter((item) => String(item.value).toLowerCase().includes(value.toLowerCase()))];
  }

  addNew() {
    this.addNewItem.emit(this.displayLabel);
  }

  registerOnChange(fn: (value: SearchItem) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
    // this.selectItem(obj);
  }

  ngAfterViewInit(): void {
    console.log(this.id);
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
