import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowhidHossainComponent } from './towhid-hossain.component';

describe('TowhidHossainComponent', () => {
  let component: TowhidHossainComponent;
  let fixture: ComponentFixture<TowhidHossainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowhidHossainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TowhidHossainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
