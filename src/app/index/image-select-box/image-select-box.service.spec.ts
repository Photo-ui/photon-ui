import { TestBed } from '@angular/core/testing';

import { ImageSelectBoxService } from './image-select-box.service';

describe('ImageSelectBoxService', () => {
  let service: ImageSelectBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageSelectBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
