import { TestBed } from '@angular/core/testing';

import { DocumentSurveysServiceService } from './document-surveys-service.service';

describe('DocumentSurveysServiceService', () => {
  let service: DocumentSurveysServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentSurveysServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
