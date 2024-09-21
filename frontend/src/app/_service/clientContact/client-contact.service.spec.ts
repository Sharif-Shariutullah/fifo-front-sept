import { TestBed } from '@angular/core/testing';

import { ClientContactService } from './client-contact.service';

describe('ClientContactService', () => {
  let service: ClientContactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
