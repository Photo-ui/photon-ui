import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeFixComponent } from './code-fix.component';

describe('CodeFixComponent', () => {
  let component: CodeFixComponent;
  let fixture: ComponentFixture<CodeFixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodeFixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CodeFixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
