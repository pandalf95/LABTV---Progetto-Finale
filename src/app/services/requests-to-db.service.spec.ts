import { TestBed } from '@angular/core/testing';

import { RequestsToDbService } from './requests-to-db.service';

describe('RequestsToDbService', () => {
  let service: RequestsToDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestsToDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
