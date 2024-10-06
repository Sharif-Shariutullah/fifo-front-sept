import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNewsComponent } from './view-news.component';

describe('ViewNewsComponent', () => {
  let component: ViewNewsComponent;
  let fixture: ComponentFixture<ViewNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
