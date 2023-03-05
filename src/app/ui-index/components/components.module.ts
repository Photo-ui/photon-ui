import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import {UiButtonComponent} from "./ui-button/ui-button.component";
import {UiComponentsModule} from "../../ui-components/ui-components.module";
import {PiButtonModule} from "../../ui-components/pi-button/pi-button.module";
import {UiInputComponent} from "./ui-input/ui-input.component";
import {UiTextAreaComponent} from "./ui-text-area/ui-text-area.component";
import {PiFloatingLabelTextAreaModule} from "../../ui-components/pi-floating-label-text-area/pi-floating-label-text-area.module";
import { UiSelectListComponent } from './ui-select-list/ui-select-list.component';
import {PiSelectListModule} from "../../ui-components/pi-select-list/pi-select-list.module";
import {FormsModule} from "@angular/forms";
import {UiCheckboxComponent} from "./ui-checkbox/ui-checkbox.component";
import {PiCheckBoxModule} from "../../ui-components/pi-check-box/pi-check-box.module";
import {UiDropdownComponent} from "./ui-dropdown/ui-dropdown.component";
import {PiDropdownModule} from "../../ui-components/pi-dropdown/pi-dropdown.module";
import {PiDropListModule} from "../../ui-components/pi-drop-list/pi-drop-list.module";
import {CompModalComponent} from "./ui-modal/comp-modal/comp-modal.component";
import {UiModalComponent} from "./ui-modal/ui-modal.component";
import {PiModalModule} from "../../ui-components/pi-modal/pi-modal.module";
import {ModalService} from "../../ui-components/pi-modal/modal/modal.service";
import {UiDrawerComponent} from "./ui-drawer/ui-drawer.component";
import {CompDrawerComponent} from "./ui-drawer/comp-drawer/comp-drawer.component";
import {DrawerService} from "../../ui-components/pi-drawer/drawer.service";
import {PiDrawerModule} from "../../ui-components/pi-drawer/pi-drawer.module";
import {NotificationService} from "../../ui-components/pi-notification/notification.service";
import {PiLoaderModule} from "../../ui-components/pi-loader/pi-loader.module";
import {UiLoaderComponent} from "./ui-loader/ui-loader.component";
import {UiImagePickerComponent} from "./ui-image-picker/ui-image-picker.component";
import {PiImagePickerModule} from "../../ui-components/pi-image-picker/pi-image-picker.module";
import { UiToggleComponent } from './ui-toggle/ui-toggle.component';
import {PiToggleModule} from "../../ui-components/pi-toggle/pi-toggle.module";
import { UiIconButtonComponent } from './ui-icon-button/ui-icon-button.component';
import {PiIconButtonModule} from "../../ui-components/pi-icon-button/pi-icon-button.module";
import {UiIndexModule} from "../ui-index.module";
import { UiAvatarComponent } from './ui-avatar/ui-avatar.component';
import {PiAvatarModule} from "../../ui-components/pi-avatar/pi-avatar.module";
import { UiAvatarGroupComponent } from './ui-avatar-group/ui-avatar-group.component';
import {PiAvatarGroupModule} from "../../ui-components/pi-avatar-group/pi-avatar-group.module";
import { UiCalendarComponent } from './ui-calendar/ui-calendar.component';
import {PiCalendarModule} from "../../ui-components/pi-calendar/pi-calendar.module";
import {PiFloatingLabelInputModule} from "../../ui-components/pi-floating-label-input/pi-floating-label-input.module";
import {PiInputModule} from "../../ui-components/pi-input/pi-input.module";
import {PiTextAreaModule} from "../../ui-components/pi-text-area/pi-text-area.module";


@NgModule({
  declarations: [
    ComponentsComponent,
    UiButtonComponent,
    UiInputComponent,
    UiTextAreaComponent,
    UiSelectListComponent,
    UiCheckboxComponent,
    UiDropdownComponent,
    CompModalComponent,
    UiModalComponent,
      UiDrawerComponent,
      CompDrawerComponent,
      UiLoaderComponent,
      UiImagePickerComponent,
      UiToggleComponent,
      UiIconButtonComponent,
      UiAvatarComponent,
      UiAvatarGroupComponent,
      UiCalendarComponent
  ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        UiComponentsModule,
        PiButtonModule,
        PiFloatingLabelInputModule,
        PiFloatingLabelTextAreaModule,
        PiSelectListModule,
        FormsModule,
        PiCheckBoxModule,
        PiDropdownModule,
        PiDropListModule,
        PiModalModule,
        PiDrawerModule,
        PiLoaderModule,
        PiImagePickerModule,
        PiToggleModule,
        PiIconButtonModule,
        UiIndexModule,
        PiAvatarModule,
        PiAvatarGroupModule,
        PiCalendarModule,
        PiInputModule,
        PiTextAreaModule
    ],
  providers: [
    ModalService,
    DrawerService,
    NotificationService
  ]
})
export class ComponentsModule { }
