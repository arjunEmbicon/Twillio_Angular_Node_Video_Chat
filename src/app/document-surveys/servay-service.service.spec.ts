import { TestBed } from '@angular/core/testing';

import { ServayServiceService } from './servay-service.service';

describe('ServayServiceService', () => {
  let service: ServayServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServayServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
