import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSelectListComponent } from './ui-select-list.component';

describe('UiSelectListComponent', () => {
  let component: UiSelectListComponent;
  let fixture: ComponentFixture<UiSelectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSelectListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
