import { TestBed } from '@angular/core/testing';

import { UiIconButtonService } from './ui-icon-button.service';

describe('UiIconButtonService', () => {
  let service: UiIconButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiIconButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
