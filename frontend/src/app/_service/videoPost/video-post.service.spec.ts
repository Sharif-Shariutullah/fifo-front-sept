import { TestBed } from '@angular/core/testing';

import { VideoPostService } from './video-post.service';

describe('VideoPostService', () => {
  let service: VideoPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
