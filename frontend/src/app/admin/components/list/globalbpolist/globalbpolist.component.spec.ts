import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalbpolistComponent } from './globalbpolist.component';

describe('GlobalbpolistComponent', () => {
  let component: GlobalbpolistComponent;
  let fixture: ComponentFixture<GlobalbpolistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalbpolistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalbpolistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
