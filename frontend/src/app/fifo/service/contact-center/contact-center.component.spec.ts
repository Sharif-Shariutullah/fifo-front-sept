import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCenterComponent } from './contact-center.component';

describe('ContactCenterComponent', () => {
  let component: ContactCenterComponent;
  let fixture: ComponentFixture<ContactCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactCenterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
