import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCheckListComponent } from './ui-check-list.component';

describe('UiCheckListComponent', () => {
  let component: UiCheckListComponent;
  let fixture: ComponentFixture<UiCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiCheckListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
