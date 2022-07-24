import {Component, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'pi-code-snippet',
  templateUrl: './code-snippet.component.html',
  styleUrls: ['./code-snippet.component.scss']
})
export class CodeSnippetComponent implements OnInit {
  @Input() textToCopy = '';
  @Input() canCopy = true;
  constructor() { }

  ngOnInit(): void {
  }

}
