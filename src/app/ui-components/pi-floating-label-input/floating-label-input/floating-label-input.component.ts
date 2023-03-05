import {Component, ElementRef, EventEmitter, forwardRef, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {FloatingLabelInputService} from "./floating-label-input.service";
import {BaseService} from "../../base.service";

@Component({
  selector: 'pi-floating-label-input',
  templateUrl: './floating-label-input.component.html',
  styleUrls: ['./floating-label-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => FloatingLabelInputComponent)
    }
  ]
})
export class FloatingLabelInputComponent implements OnInit, ControlValueAccessor {
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() floatingLabel: 'inline' | 'outline' | undefined;
  @Input() piStyle: any;
  @Input() piClass: any;
  @Input() piLabelStyle: any;
  @Input() piLabelClass: any;
  @Input() model: string = '';

  onChange = (_: any) => {};
  onTouched = () => {};
  @Input() disabled = false;
  id = BaseService.uuid();
  constructor(public service: FloatingLabelInputService) { }

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
