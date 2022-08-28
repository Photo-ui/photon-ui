import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormConfig} from "../dynamic-forms-config/form-config";
import {BaseService} from "../base.service";
import {FormDefinitions} from "../dynamic-forms-config/form-definitions";
import {CdkDragDrop, moveItemInArray} from "@angular/cdk/drag-drop";

@Component({
  selector: 'pi-check-list',
  templateUrl: './pi-check-list.component.html',
  styleUrls: ['./pi-check-list.component.scss']
})
export class PiCheckListComponent implements OnInit {
  checkItem = '';
  errorMessage = '';
  showError = false;
  form: FormConfig = {
    id: BaseService.uuid(),
    title: '',
    serviceId: '',
    definitions: []
  };

  @Input() formData!: FormConfig;
  @Input() editMode = false;
  @Input() viewMode = false;
  @Output() checkListItems = new EventEmitter<FormConfig>();
  constructor() { }

  ngOnInit(): void {
    if(this.formData) {
      this.form = this.formData;
    }
  }

  removeItem(item: FormDefinitions) {
    const findIndex = this.form.definitions.findIndex((data) => data.key === item.key);
    this.form.definitions.splice(findIndex, 1);
    this.updateOrder();
    this.checkListItems.emit(this.form);
  }

  addCheckItem() {
    this.showError = false;
    const findDuplicate = this.form.definitions.find((item) => item.label.toUpperCase() === this.checkItem.toUpperCase());
    if (findDuplicate) {
      this.errorMessage = 'Duplicate values not allowed.'
      this.showError = true;
      return;
    }
    const define: FormDefinitions = {
      key: BaseService.uuid(),
      type: "bool",
      value: false,
      required: false,
      label: this.checkItem,
      order: this.form.definitions.length + 1
    }
    this.checkItem = '';
    this.form.definitions.push(define);
   this.checkListItems.emit(this.form);
  }

  moveItem(from: number, to: number) {
    const data = this.form.definitions.splice(from, 1)[0];
    this.form.definitions.splice(to, 0, data);
    this.updateOrder();
  }

  drop(event: CdkDragDrop<FormDefinitions[]>) {
    moveItemInArray(this.form.definitions, event.previousIndex, event.currentIndex);
    this.updateOrder();
    this.checkListItems.emit(this.form);
  }

  updateOrder() {
    this.form.definitions.forEach((item, index) => {
      item.order = index + 1;
    })
  }
}
