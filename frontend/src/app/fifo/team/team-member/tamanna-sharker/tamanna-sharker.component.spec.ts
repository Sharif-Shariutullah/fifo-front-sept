import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TamannaSharkerComponent } from './tamanna-sharker.component';

describe('TamannaSharkerComponent', () => {
  let component: TamannaSharkerComponent;
  let fixture: ComponentFixture<TamannaSharkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TamannaSharkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TamannaSharkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
