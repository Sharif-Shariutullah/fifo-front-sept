import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtiaBilkisComponent } from './atia-bilkis.component';

describe('AtiaBilkisComponent', () => {
  let component: AtiaBilkisComponent;
  let fixture: ComponentFixture<AtiaBilkisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtiaBilkisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtiaBilkisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
