import { TestBed } from '@angular/core/testing';

import { NewsPostService } from './news-post.service';

describe('NewsPostService', () => {
  let service: NewsPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
