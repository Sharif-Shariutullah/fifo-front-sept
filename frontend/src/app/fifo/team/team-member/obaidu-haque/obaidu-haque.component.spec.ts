import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObaiduHaqueComponent } from './obaidu-haque.component';

describe('ObaiduHaqueComponent', () => {
  let component: ObaiduHaqueComponent;
  let fixture: ComponentFixture<ObaiduHaqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObaiduHaqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObaiduHaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
