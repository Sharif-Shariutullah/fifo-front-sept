import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerpostComponent } from './careerpost.component';

describe('CareerpostComponent', () => {
  let component: CareerpostComponent;
  let fixture: ComponentFixture<CareerpostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerpostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerpostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
