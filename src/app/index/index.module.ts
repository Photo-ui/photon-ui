import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from './index.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import {UiComponentsModule} from "../ui-components/ui-components.module";
import {ClipboardModule} from "@angular/cdk/clipboard";


@NgModule({
  declarations: [
    IndexComponent,
    SelectBoxComponent
  ],
    imports: [
        CommonModule,
        IndexRoutingModule,
        UiComponentsModule,
        ClipboardModule
    ]
})
export class IndexModule { }
