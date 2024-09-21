import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicepostComponent } from './servicepost.component';

describe('ServicepostComponent', () => {
  let component: ServicepostComponent;
  let fixture: ComponentFixture<ServicepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
