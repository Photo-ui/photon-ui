import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SearchBoxComponent} from "./search-box/search-box.component";
import {FormsModule} from "@angular/forms";
import { CodeSnippetComponent } from './code-snippet/code-snippet.component';
import {ClipboardModule} from "@angular/cdk/clipboard";
import { QuickCodeComponent } from './quick-code/quick-code.component';
import { CodeFixComponent } from './code-fix/code-fix.component';
import {ImageSearchboxComponent} from "./image-searchbox/image-searchbox.component";
import { DynamicFormsConfigComponent } from './dynamic-forms-config/dynamic-forms-config.component';
import { TextAreaComponent } from './text-area/text-area.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    CodeSnippetComponent,
    QuickCodeComponent,
    ImageSearchboxComponent,
    CodeFixComponent,
    DynamicFormsConfigComponent,
    TextAreaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ClipboardModule,
  ],
    exports: [
        SearchBoxComponent,
        CodeSnippetComponent,
        QuickCodeComponent,
        ImageSearchboxComponent,
        CodeFixComponent,
        TextAreaComponent
    ]
})
export class UiComponentsModule {
  constructor( ) {
    document.addEventListener('click', () => {
      if (!document.activeElement?.attributes.getNamedItem('searchbox')) {
        if (!document.activeElement?.attributes.getNamedItem('searchitem')) {
          const ele = document.getElementsByClassName('search-drop-container');
          for (let i = 0; i< ele.length;i++) {
            if (!ele.item(i)?.classList.contains('hidden')) {
              ele.item(i)?.classList.add('hidden')
            }
          }
        }
      }
    });
  }
}
