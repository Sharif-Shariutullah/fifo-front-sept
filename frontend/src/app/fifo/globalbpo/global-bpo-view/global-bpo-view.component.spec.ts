import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBpoViewComponent } from './global-bpo-view.component';

describe('GlobalBpoViewComponent', () => {
  let component: GlobalBpoViewComponent;
  let fixture: ComponentFixture<GlobalBpoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalBpoViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalBpoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
