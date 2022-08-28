import { TestBed } from '@angular/core/testing';

import { UiCheckListService } from './ui-check-list.service';

describe('UiCheckListService', () => {
  let service: UiCheckListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiCheckListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
