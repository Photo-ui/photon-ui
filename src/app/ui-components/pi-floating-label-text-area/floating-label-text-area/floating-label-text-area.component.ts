import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FloatingLabelTextAreaService} from "./floating-label-text-area.service";
import {BaseService} from "../../base.service";

@Component({
  selector: 'pi-floating-label-floating-label-text-area',
  templateUrl: './floating-label-text-area.component.html',
  styleUrls: ['./floating-label-text-area.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FloatingLabelTextAreaComponent)
    }
  ]
})
export class FloatingLabelTextAreaComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() floatingLabel: 'inline' | 'outline' | undefined;
  @Input() rows = ''
  @Input() model: string = '';

  onChange = (_: any) => {};
  onTouched = () => {};
  @Input() disabled = false;
  id = BaseService.uuid();
  constructor(public service: FloatingLabelTextAreaService) { }

  ngOnInit(): void {

  }

  registerOnChange(fn: (_: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  writeValue(obj: any): void {
    this.model = obj;
  }

}
