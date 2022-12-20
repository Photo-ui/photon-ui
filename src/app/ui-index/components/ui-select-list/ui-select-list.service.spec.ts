import { TestBed } from '@angular/core/testing';

import { UiSelectListService } from './ui-select-list.service';

describe('UiSelectListService', () => {
  let service: UiSelectListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiSelectListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
