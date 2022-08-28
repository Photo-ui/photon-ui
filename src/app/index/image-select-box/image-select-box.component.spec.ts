import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageSelectBoxComponent } from './image-select-box.component';

describe('ImageSelectBoxComponent', () => {
  let component: ImageSelectBoxComponent;
  let fixture: ComponentFixture<ImageSelectBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageSelectBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageSelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
