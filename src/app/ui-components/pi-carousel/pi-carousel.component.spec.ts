import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiCarouselComponent } from './pi-carousel.component';

describe('PiCarouselComponent', () => {
  let component: PiCarouselComponent;
  let fixture: ComponentFixture<PiCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PiCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
