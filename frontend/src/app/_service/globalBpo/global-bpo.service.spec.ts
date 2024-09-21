import { TestBed } from '@angular/core/testing';

import { GlobalBpoService } from './global-bpo.service';

describe('GlobalBpoService', () => {
  let service: GlobalBpoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GlobalBpoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
