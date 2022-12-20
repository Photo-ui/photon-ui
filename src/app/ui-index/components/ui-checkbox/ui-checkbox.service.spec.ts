import { TestBed } from '@angular/core/testing';

import { UiCheckboxService } from './ui-checkbox.service';

describe('UiCheckboxService', () => {
  let service: UiCheckboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiCheckboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
