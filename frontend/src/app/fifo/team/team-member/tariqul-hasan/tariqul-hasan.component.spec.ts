import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TariqulHasanComponent } from './tariqul-hasan.component';

describe('TariqulHasanComponent', () => {
  let component: TariqulHasanComponent;
  let fixture: ComponentFixture<TariqulHasanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TariqulHasanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TariqulHasanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
