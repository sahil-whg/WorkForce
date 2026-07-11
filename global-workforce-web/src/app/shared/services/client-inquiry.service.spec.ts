import { TestBed } from '@angular/core/testing';

import { ClientInquiryService } from './client-inquiry.service';

describe('ClientInquiryService', () => {
  let service: ClientInquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientInquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
