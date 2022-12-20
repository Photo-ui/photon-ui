import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiAvatarGroupComponent } from './ui-avatar-group.component';

describe('UiAvatarGroupComponent', () => {
  let component: UiAvatarGroupComponent;
  let fixture: ComponentFixture<UiAvatarGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiAvatarGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiAvatarGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
