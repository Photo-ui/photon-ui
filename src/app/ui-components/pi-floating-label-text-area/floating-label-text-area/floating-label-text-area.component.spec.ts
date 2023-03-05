import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingLabelTextAreaComponent } from './floating-label-text-area.component';

describe('TextAreaComponent', () => {
  let component: FloatingLabelTextAreaComponent;
  let fixture: ComponentFixture<FloatingLabelTextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FloatingLabelTextAreaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FloatingLabelTextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
