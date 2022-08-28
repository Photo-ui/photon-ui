import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSearchboxComponent } from './image-searchbox.component';

describe('ImageSearchboxComponent', () => {
  let component: ImageSearchboxComponent;
  let fixture: ComponentFixture<ImageSearchboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSearchboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSearchboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
