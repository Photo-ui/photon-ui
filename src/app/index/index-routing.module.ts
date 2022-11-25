import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {SelectBoxComponent} from "./select-box/select-box.component";
import {ImageSelectBoxComponent} from "./image-select-box/image-select-box.component";
import {DynamicFormsComponent} from "./dynamic-forms/dynamic-forms.component";
import {UiCheckListComponent} from "./ui-check-list/ui-check-list.component";
import {UiModalComponent} from "./ui-modal/ui-modal.component";
import {UiInputComponent} from "./ui-input/ui-input.component";
import {UiButtonComponent} from "./ui-button/ui-button.component";
import {UiCarouselComponent} from "./ui-carousel/ui-carousel.component";
import {UiTextAreaComponent} from "./ui-text-area/ui-text-area.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'select-box',
        component: SelectBoxComponent
      },
      {
        path: 'input',
        component: UiInputComponent
      },
      {
        path: 'text-area',
        component: UiTextAreaComponent
      },
      {
        path: 'image-select-box',
        component: ImageSelectBoxComponent
      },
      {
        path: 'modal',
        component: UiModalComponent
      },
      {
        path: 'check-list',
        component: UiCheckListComponent
      },
      {
        path: 'dynamic-forms',
        component: DynamicFormsComponent
      },
      {
        path: 'button',
        component: UiButtonComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/input',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
