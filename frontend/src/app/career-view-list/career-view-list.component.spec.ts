import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerViewListComponent } from './career-view-list.component';

describe('CareerViewListComponent', () => {
  let component: CareerViewListComponent;
  let fixture: ComponentFixture<CareerViewListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerViewListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerViewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
