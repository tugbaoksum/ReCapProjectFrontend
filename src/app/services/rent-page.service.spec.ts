import { TestBed } from '@angular/core/testing';

import { RentPageService } from './rent-page.service';

describe('RentPageService', () => {
  let service: RentPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
