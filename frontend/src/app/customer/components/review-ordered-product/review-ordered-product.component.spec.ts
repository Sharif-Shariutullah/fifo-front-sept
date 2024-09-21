import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOrderedProductComponent } from './review-ordered-product.component';

describe('ReviewOrderedProductComponent', () => {
  let component: ReviewOrderedProductComponent;
  let fixture: ComponentFixture<ReviewOrderedProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewOrderedProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewOrderedProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
