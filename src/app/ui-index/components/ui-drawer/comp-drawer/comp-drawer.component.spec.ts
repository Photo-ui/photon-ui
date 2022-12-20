import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDrawerComponent } from './comp-drawer.component';

describe('CompDrawerComponent', () => {
  let component: CompDrawerComponent;
  let fixture: ComponentFixture<CompDrawerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDrawerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
