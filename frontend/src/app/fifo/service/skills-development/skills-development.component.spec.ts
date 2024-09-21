import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsDevelopmentComponent } from './skills-development.component';

describe('SkillsDevelopmentComponent', () => {
  let component: SkillsDevelopmentComponent;
  let fixture: ComponentFixture<SkillsDevelopmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsDevelopmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
