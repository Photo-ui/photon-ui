import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiCheckListComponent } from './pi-check-list.component';

describe('PiCheckListComponent', () => {
  let component: PiCheckListComponent;
  let fixture: ComponentFixture<PiCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiCheckListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
