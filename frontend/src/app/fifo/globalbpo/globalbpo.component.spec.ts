import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalbpoComponent } from './globalbpo.component';

describe('GlobalbpoComponent', () => {
  let component: GlobalbpoComponent;
  let fixture: ComponentFixture<GlobalbpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalbpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalbpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
