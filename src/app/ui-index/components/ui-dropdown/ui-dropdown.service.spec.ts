import { TestBed } from '@angular/core/testing';

import { UiDropdownService } from './ui-dropdown.service';

describe('UiDropdownService', () => {
  let service: UiDropdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiDropdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
