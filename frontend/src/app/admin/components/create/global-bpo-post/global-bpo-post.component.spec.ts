import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalBpoPostComponent } from './global-bpo-post.component';

describe('GlobalBpoPostComponent', () => {
  let component: GlobalBpoPostComponent;
  let fixture: ComponentFixture<GlobalBpoPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalBpoPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalBpoPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
