import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FloatingLabelTextAreaComponent} from "./floating-label-text-area/floating-label-text-area.component";



@NgModule({
  declarations: [FloatingLabelTextAreaComponent],
  exports: [FloatingLabelTextAreaComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class PiFloatingLabelTextAreaModule { }
