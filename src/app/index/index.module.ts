import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { ImageSelectBoxComponent } from './image-select-box/image-select-box.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { PiButtonComponent } from './pi-button/pi-button.component';
import {FormsModule} from "@angular/forms";
import { PiTextareaComponent } from './pi-textarea/pi-textarea.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {PiButtonModule} from "../ui-components/pi-button/pi-button.module";
import {PiInputModule} from "../ui-components/pi-input/pi-input.module";
import {PiCheckBoxModule} from "../ui-components/pi-check-box/pi-check-box.module";
import { UiCheckListComponent } from './ui-check-list/ui-check-list.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import {PiCheckListModule} from "../ui-components/pi-check-list/pi-check-list.module";


@NgModule({
  declarations: [
    IndexComponent,
    SelectBoxComponent,
    ImageSelectBoxComponent,
    DynamicFormsComponent,
    PiButtonComponent,
    PiTextareaComponent,
    UiCheckListComponent,
    UiModalComponent,
    UiInputComponent
  ],
    imports: [
        CommonModule,
        IndexRoutingModule,
        ClipboardModule,
        FormsModule,
        OverlayModule,
        UiComponentsModule,
        PiButtonModule,
        PiInputModule,
        PiCheckBoxModule,
        PiCheckListModule
    ]
})
export class IndexModule { }
