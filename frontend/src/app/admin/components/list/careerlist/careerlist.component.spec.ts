import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerlistComponent } from './careerlist.component';

describe('CareerlistComponent', () => {
  let component: CareerlistComponent;
  let fixture: ComponentFixture<CareerlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
