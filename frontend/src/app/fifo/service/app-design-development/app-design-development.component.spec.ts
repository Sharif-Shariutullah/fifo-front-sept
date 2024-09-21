import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDesignDevelopmentComponent } from './app-design-development.component';

describe('AppDesignDevelopmentComponent', () => {
  let component: AppDesignDevelopmentComponent;
  let fixture: ComponentFixture<AppDesignDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDesignDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppDesignDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
