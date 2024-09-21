import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerylistComponent } from './gallerylist.component';

describe('GallerylistComponent', () => {
  let component: GallerylistComponent;
  let fixture: ComponentFixture<GallerylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallerylistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallerylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
