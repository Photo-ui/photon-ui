import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatingLabelInputComponent} from "./floating-label-input/floating-label-input.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [FloatingLabelInputComponent],
    exports: [FloatingLabelInputComponent],
  imports: [
      FormsModule,
      ReactiveFormsModule,
    CommonModule
  ]
})
export class PiFloatingLabelInputModule { }
