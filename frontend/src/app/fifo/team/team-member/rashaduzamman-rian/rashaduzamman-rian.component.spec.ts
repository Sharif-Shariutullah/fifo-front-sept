import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RashaduzammanRianComponent } from './rashaduzamman-rian.component';

describe('RashaduzammanRianComponent', () => {
  let component: RashaduzammanRianComponent;
  let fixture: ComponentFixture<RashaduzammanRianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RashaduzammanRianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RashaduzammanRianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
