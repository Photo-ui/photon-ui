import { Component, OnInit } from '@angular/core';
import {FormConfig} from "../../ui-components/dynamic-forms-config/form-config";
import {UiCheckListService} from "./ui-check-list.service";

@Component({
  selector: 'app-ui-check-list',
  templateUrl: './ui-check-list.component.html',
  styleUrls: ['./ui-check-list.component.scss']
})
export class UiCheckListComponent implements OnInit {
  checkListData!: FormConfig;
  formOutputText = '';
  editMode = false;
  viewMode = false;


  constructor(public service: UiCheckListService) { }

  ngOnInit(): void {
    this.updateFormOutputText(this.service.data);
  }

  updateFormOutputText(data: FormConfig) {
    this.checkListData = data;
    this.formOutputText = JSON.stringify(data, null, '\t');
  }

  FormOutputText(data: FormConfig): any {
    return  JSON.stringify(data, null, '\t');
  }
}
