import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiCheckListComponent } from './pi-check-list.component';
import {FormsModule} from "@angular/forms";
import {PiCheckBoxModule} from "../pi-check-box/pi-check-box.module";
import {DragDropModule} from "@angular/cdk/drag-drop";



@NgModule({
  declarations: [
    PiCheckListComponent
  ],
  exports: [PiCheckListComponent],
    imports: [
        CommonModule,
        FormsModule,
        PiCheckBoxModule,
        DragDropModule
    ]
})
export class PiCheckListModule { }
