import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsConfigComponent } from './dynamic-forms-config.component';

describe('DynamicFormsConfigComponent', () => {
  let component: DynamicFormsConfigComponent;
  let fixture: ComponentFixture<DynamicFormsConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormsConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicFormsConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
