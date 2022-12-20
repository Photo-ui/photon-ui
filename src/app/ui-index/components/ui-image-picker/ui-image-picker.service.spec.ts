import { TestBed } from '@angular/core/testing';

import { UiImagePickerService } from './ui-image-picker.service';

describe('UiImagePickerService', () => {
  let service: UiImagePickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiImagePickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
