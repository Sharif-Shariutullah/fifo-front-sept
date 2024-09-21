import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JahangirHossainUzzalComponent } from './jahangir-hossain-uzzal.component';

describe('JahangirHossainUzzalComponent', () => {
  let component: JahangirHossainUzzalComponent;
  let fixture: ComponentFixture<JahangirHossainUzzalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JahangirHossainUzzalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JahangirHossainUzzalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
