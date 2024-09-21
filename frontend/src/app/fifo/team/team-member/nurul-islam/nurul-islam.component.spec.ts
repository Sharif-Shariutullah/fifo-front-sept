import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurulIslamComponent } from './nurul-islam.component';

describe('NurulIslamComponent', () => {
  let component: NurulIslamComponent;
  let fixture: ComponentFixture<NurulIslamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NurulIslamComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurulIslamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
