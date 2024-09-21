import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreativeDesignComponent } from './creative-design.component';

describe('CreativeDesignComponent', () => {
  let component: CreativeDesignComponent;
  let fixture: ComponentFixture<CreativeDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreativeDesignComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreativeDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
