import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiButtonComponent } from './pi-button.component';

describe('PiButtonComponent', () => {
  let component: PiButtonComponent;
  let fixture: ComponentFixture<PiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
