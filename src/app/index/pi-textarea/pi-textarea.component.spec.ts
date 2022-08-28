import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiTextareaComponent } from './pi-textarea.component';

describe('PiTextareaComponent', () => {
  let component: PiTextareaComponent;
  let fixture: ComponentFixture<PiTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiTextareaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
