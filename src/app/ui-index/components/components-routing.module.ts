import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ComponentsComponent} from "./components.component";
import {UiButtonComponent} from "./ui-button/ui-button.component";
import {UiInputComponent} from "./ui-input/ui-input.component";
import {UiTextAreaComponent} from "./ui-text-area/ui-text-area.component";
import {UiSelectListComponent} from "./ui-select-list/ui-select-list.component";
import {UiCheckboxComponent} from "./ui-checkbox/ui-checkbox.component";
import {UiDropdownComponent} from "./ui-dropdown/ui-dropdown.component";
import {UiModalComponent} from "./ui-modal/ui-modal.component";
import {UiDrawerComponent} from "./ui-drawer/ui-drawer.component";
import {UiLoaderComponent} from "./ui-loader/ui-loader.component";
import {UiImagePickerComponent} from "./ui-image-picker/ui-image-picker.component";
import {UiToggleComponent} from "./ui-toggle/ui-toggle.component";
import {UiIconButtonComponent} from "./ui-icon-button/ui-icon-button.component";
import {GetStartedComponent} from "../get-started/get-started.component";
import {UiAvatarComponent} from "./ui-avatar/ui-avatar.component";
import {UiAvatarGroupComponent} from "./ui-avatar-group/ui-avatar-group.component";
import {UiCalendarComponent} from "./ui-calendar/ui-calendar.component";

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'get-started',
        component: GetStartedComponent
      },{
        path: 'buttons',
        component: UiButtonComponent
      },
      {
        path: 'input',
        component: UiInputComponent
      },
      {
        path: 'floating-label-text-area',
        component: UiTextAreaComponent
      },
      {
        path: 'select-list',
        component: UiSelectListComponent
      },
      {
        path: 'check-box',
        component: UiCheckboxComponent
      },
      {
        path: 'drop-list',
        component: UiDropdownComponent
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
        path: 'toggle',
        component: UiToggleComponent
      },
      {
        path: 'icon-button',
        component: UiIconButtonComponent
      },
      {
        path: 'avatar',
        component: UiAvatarComponent
      },
      {
        path: 'avatar-group',
        component: UiAvatarGroupComponent
      },
      {
        path: 'calendar',
        component: UiCalendarComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
