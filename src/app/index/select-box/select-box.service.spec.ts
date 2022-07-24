import { TestBed } from '@angular/core/testing';

import { SelectBoxService } from './select-box.service';

describe('SelectBoxService', () => {
  let service: SelectBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
