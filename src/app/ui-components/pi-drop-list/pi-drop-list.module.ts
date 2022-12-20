import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropListComponent } from './drop-list/drop-list.component';



@NgModule({
    declarations: [
        DropListComponent
    ],
    exports: [
        DropListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PiDropListModule { }
