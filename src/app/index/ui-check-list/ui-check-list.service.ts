import { Injectable } from '@angular/core';
import {FormConfig} from "../../ui-components/dynamic-forms-config/form-config";
import {Form} from "@angular/forms";
import {FormDefinitions} from "../../ui-components/dynamic-forms-config/form-definitions";

@Injectable({
  providedIn: 'root'
})
export class UiCheckListService {
  data: FormConfig =
{
    "id": 1,
    "title": "",
    "serviceId": "",
    "definitions": [
      {
        "key": 1,
        "type": "bool",
        "value": false,
        "required": false,
        "label": "CHECL",
        "order": 1
      },
      {
        "key": 2,
        "type": "bool",
        "value": false,
        "required": false,
        "label": "HDGFG",
        "order": 2
      },
      {
        "key": 3,
        "type": "bool",
        "value": false,
        "required": false,
        "label": "ZORRO",
        "order": 3
      }
    ]
};

  formClass = `
  class FormConfig {
    id: any;
    title: string;
    serviceId: any;
    definitions: FormDefinitions[];
  }
  `

  formDefinition = `
  class FormDefinitions {
    key: any;
    type: 'string' | 'int' | 'bool' | 'enum' | 'lightbox' | 'multiline';
    value: any;
    required: boolean;
    label: string;
    placeholder: string;
    order: number;
    enumValues: any[];
    lightBoxData: LightBoxData[];
  }
  `



  text = `
  export class UiCheckListComponent implements OnInit {
  checkListData!: FormConfig;
  editMode = false;
  viewMode = false;
  
  constructor(public service: UiCheckListService) { }

  ngOnInit(): void {
  }

  updateFormOutputText(data: FormConfig) {
    this.checkListData = data;
  }`;
  constructor() { }
}
