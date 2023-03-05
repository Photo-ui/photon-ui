import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {ImageSelectBoxComponent} from "./image-select-box/image-select-box.component";
import {UiDropdownComponent} from "../ui-index/components/ui-dropdown/ui-dropdown.component";
import {UiImagePickerComponent} from "../ui-index/components/ui-image-picker/ui-image-picker.component";
import {UiLoaderComponent} from "../ui-index/components/ui-loader/ui-loader.component";
import {UiDrawerComponent} from "../ui-index/components/ui-drawer/ui-drawer.component";
import {UiModalComponent} from "../ui-index/components/ui-modal/ui-modal.component";

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'image-select-box',
        component: ImageSelectBoxComponent
      },
      {
        path: 'modal',
        component: UiModalComponent
      },
      {
        path: 'drawer',
        component: UiDrawerComponent
      },
      {
        path: 'loader',
        component: UiLoaderComponent
      },
      {
        path: 'image-picker',
        component: UiImagePickerComponent
      },
      {
        path: 'dropdown',
        component: UiDropdownComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: '/floating-label-input',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
