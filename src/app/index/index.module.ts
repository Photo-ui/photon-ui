import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { ImageSelectBoxComponent } from './image-select-box/image-select-box.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import {FormsModule} from "@angular/forms";
import {PiButtonModule} from "../ui-components/pi-button/pi-button.module";
import {PiFloatingLabelInputModule} from "../ui-components/pi-floating-label-input/pi-floating-label-input.module";
import {PiCheckBoxModule} from "../ui-components/pi-check-box/pi-check-box.module";
import { UiCheckListComponent } from './ui-check-list/ui-check-list.component';
import {PiCheckListModule} from "../ui-components/pi-check-list/pi-check-list.module";
import {PiModalModule} from "../ui-components/pi-modal/pi-modal.module";
import {PiFloatingLabelTextAreaModule} from "../ui-components/pi-floating-label-text-area/pi-floating-label-text-area.module";
import {OverlayModule} from "@angular/cdk/overlay";
import {PiLoaderModule} from "../ui-components/pi-loader/pi-loader.module";
import {PiDrawerModule} from "../ui-components/pi-drawer/pi-drawer.module";
import {DrawerService} from "../ui-components/pi-drawer/drawer.service";
import {PiImagePickerModule} from "../ui-components/pi-image-picker/pi-image-picker.module";
import {NotificationService} from "../ui-components/pi-notification/notification.service";
import {PiNotificationModule} from "../ui-components/pi-notification/pi-notification.module";
import {PiDropdownModule} from "../ui-components/pi-dropdown/pi-dropdown.module";
import {PiSelectListModule} from "../ui-components/pi-select-list/pi-select-list.module";
import {PiCardModule} from "../ui-components/pi-card/pi-card.module";
import {PiToggleModule} from "../ui-components/pi-toggle/pi-toggle.module";
import {PiRatingsModule} from "../ui-components/pi-ratings/pi-ratings.module";
import {PiIconButtonModule} from "../ui-components/pi-icon-button/pi-icon-button.module";


@NgModule({
    declarations: [
        IndexComponent,
        ImageSelectBoxComponent,
        DynamicFormsComponent,
        UiCheckListComponent
    ],
    imports: [
        CommonModule,
        IndexRoutingModule,
        ClipboardModule,
        FormsModule,
        UiComponentsModule,
        PiButtonModule,
        PiFloatingLabelInputModule,
        PiCheckBoxModule,
        PiCheckListModule,
        PiModalModule,
        PiFloatingLabelTextAreaModule,
        OverlayModule,
        PiLoaderModule,
        PiDrawerModule,
        PiImagePickerModule,
        PiNotificationModule,
        PiDropdownModule,
        PiSelectListModule,
        PiCardModule,
        PiToggleModule,
        PiRatingsModule,
        PiIconButtonModule
    ],
    providers: [
        DrawerService,
        NotificationService
    ]
})
export class IndexModule { }
