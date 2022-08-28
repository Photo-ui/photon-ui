import { Component, OnInit } from '@angular/core';
import {FormConfig} from "../../ui-components/dynamic-forms-config/form-config";
import {FormDefinitions} from "../../ui-components/dynamic-forms-config/form-definitions";
import {BaseService} from "../../ui-components/base.service";

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})
export class DynamicFormsComponent implements OnInit {
  form: FormConfig = {
    id: BaseService.uuid(),
    title: '',
    definitions: []
  };

  formOutputText = '';
  selectedForm!: FormDefinitions;
  constructor() {
  }

  ngOnInit(): void {
    this.updateFormOutputText();
  }

  addCheckBox() {
    const define: FormDefinitions = {
      key: BaseService.uuid(),
      type: "bool",
      value: false,
      required: false,
      label: 'New Label',
      order: this.form.definitions.length + 1
    }
    this.form.definitions.push(define);
    this.selectItem(define);
    this.updateFormOutputText();
  }

  addInputBox() {
    const define: FormDefinitions = {
      key: BaseService.uuid(),
      type: "string",
      value: '',
      required: false,
      label: 'New Label',
      order: this.form.definitions.length + 1
    }
    this.form.definitions.push(define);
    this.selectItem(define);
    this.updateFormOutputText();
  }

  addTextAreaBox() {
    const define: FormDefinitions = {
      key: BaseService.uuid(),
      type: "multiline",
      value: '',
      required: false,
      label: 'New Label',
      order: this.form.definitions.length + 1
    }
    this.form.definitions.push(define);
    this.selectItem(define);
    this.updateFormOutputText();
  }

  updateFormOutputText() {
    this.formOutputText = JSON.stringify(this.form, null, '\t');
  }

  selectItem(ele: FormDefinitions) {
    this.selectedForm = ele;
  }
}
