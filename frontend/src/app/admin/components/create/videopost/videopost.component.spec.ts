import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideopostComponent } from './videopost.component';

describe('VideopostComponent', () => {
  let component: VideopostComponent;
  let fixture: ComponentFixture<VideopostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideopostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VideopostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
