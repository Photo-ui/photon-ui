import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiIndexRoutingModule } from './ui-index-routing.module';
import { UiIndexComponent } from './ui-index.component';
import { HomeComponent } from './home/home.component';
import {PiButtonModule} from "../ui-components/pi-button/pi-button.module";
import {PiIconButtonModule} from "../ui-components/pi-icon-button/pi-icon-button.module";
import {PiInputModule} from "../ui-components/pi-input/pi-input.module";
import {PiTextAreaModule} from "../ui-components/pi-text-area/pi-text-area.module";
import {PiCheckBoxModule} from "../ui-components/pi-check-box/pi-check-box.module";
import {PiToggleModule} from "../ui-components/pi-toggle/pi-toggle.module";
import {FormsModule} from "@angular/forms";
import {GetStartedComponent} from "./get-started/get-started.component";
import { HeaderComponent } from './header/header.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";


@NgModule({
    declarations: [
        UiIndexComponent,
        HomeComponent,
        GetStartedComponent,
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ],
    imports: [
        CommonModule,
        UiIndexRoutingModule,
        PiButtonModule,
        PiIconButtonModule,
        PiInputModule,
        PiTextAreaModule,
        PiCheckBoxModule,
        PiToggleModule,
        FormsModule,
        UiComponentsModule
    ]
})
export class UiIndexModule { }
