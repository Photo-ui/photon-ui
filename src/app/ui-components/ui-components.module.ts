import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import {ClipboardModule} from "@angular/cdk/clipboard";
import { QuickCodeComponent } from './quick-code/quick-code.component';
import { CodeFixComponent } from './code-fix/code-fix.component';
import {ImageSearchboxComponent} from "./image-searchbox/image-searchbox.component";
import { DynamicFormsConfigComponent } from './dynamic-forms-config/dynamic-forms-config.component';
import {InitializeService} from "./initialize.service";



@NgModule({
    declarations: [
        CodeSnippetComponent,
        QuickCodeComponent,
        ImageSearchboxComponent,
        CodeFixComponent,
        DynamicFormsConfigComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ClipboardModule,
    ],
    exports: [
        CodeSnippetComponent,
        QuickCodeComponent,
        ImageSearchboxComponent,
        CodeFixComponent
    ],
    providers: [InitializeService]
})
export class UiComponentsModule {
    constructor(private service: InitializeService) {

    }
}
