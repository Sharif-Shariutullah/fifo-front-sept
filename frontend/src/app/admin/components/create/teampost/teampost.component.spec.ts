import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeampostComponent } from './teampost.component';

describe('TeampostComponent', () => {
  let component: TeampostComponent;
  let fixture: ComponentFixture<TeampostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeampostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeampostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
