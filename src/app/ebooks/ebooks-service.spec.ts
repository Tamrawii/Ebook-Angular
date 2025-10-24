import { TestBed } from '@angular/core/testing';

import { EbooksService } from './ebooks-service';

describe('EbooksService', () => {
  let service: EbooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EbooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
