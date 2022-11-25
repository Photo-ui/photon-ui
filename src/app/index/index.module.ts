import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { ImageSelectBoxComponent } from './image-select-box/image-select-box.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import {FormsModule} from "@angular/forms";
import {PiButtonModule} from "../ui-components/pi-button/pi-button.module";
import {PiInputModule} from "../ui-components/pi-input/pi-input.module";
import {PiCheckBoxModule} from "../ui-components/pi-check-box/pi-check-box.module";
import { UiCheckListComponent } from './ui-check-list/ui-check-list.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { UiInputComponent } from './ui-input/ui-input.component';
import {PiCheckListModule} from "../ui-components/pi-check-list/pi-check-list.module";
import { UiButtonComponent } from './ui-button/ui-button.component';
import {PiModalModule} from "../ui-components/pi-modal/pi-modal.module";
import {CompModalComponent} from "./ui-modal/comp-modal/comp-modal.component";
import { UiCarouselComponent } from './ui-carousel/ui-carousel.component';
import { UiTextAreaComponent } from './ui-text-area/ui-text-area.component';
import {PiTextAreaModule} from "../ui-components/pi-text-area/pi-text-area.module";


@NgModule({
    declarations: [
        IndexComponent,
        SelectBoxComponent,
        ImageSelectBoxComponent,
        DynamicFormsComponent,
        UiCheckListComponent,
        UiModalComponent,
        UiInputComponent,
        UiButtonComponent,
        CompModalComponent,
        UiCarouselComponent,
        UiTextAreaComponent
    ],
    imports: [
        CommonModule,
        IndexRoutingModule,
        ClipboardModule,
        FormsModule,
        UiComponentsModule,
        PiButtonModule,
        PiInputModule,
        PiCheckBoxModule,
        PiCheckListModule,
        PiModalModule,
        PiTextAreaModule
    ]
})
export class IndexModule { }
