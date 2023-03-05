import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAreaComponent } from './text-area/text-area.component';
import {FormsModule} from "@angular/forms";



@NgModule({
    declarations: [
        TextAreaComponent
    ],
    exports: [
        TextAreaComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class PiTextAreaModule { }
