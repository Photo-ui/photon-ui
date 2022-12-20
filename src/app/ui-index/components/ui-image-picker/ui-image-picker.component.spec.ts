import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiImagePickerComponent } from './ui-image-picker.component';

describe('UiImagePickerComponent', () => {
  let component: UiImagePickerComponent;
  let fixture: ComponentFixture<UiImagePickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiImagePickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiImagePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
