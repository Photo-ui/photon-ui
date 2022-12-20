import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexComponent} from "./index.component";
import {ImageSelectBoxComponent} from "./image-select-box/image-select-box.component";
import {UiModalComponent} from "./ui-modal/ui-modal.component";
import {UiLoaderComponent} from "./ui-loader/ui-loader.component";
import {UiDrawerComponent} from "./ui-drawer/ui-drawer.component";
import {UiImagePickerComponent} from "./ui-image-picker/ui-image-picker.component";
import {UiDropdownComponent} from "../ui-index/components/ui-dropdown/ui-dropdown.component";

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
    redirectTo: '/input',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
