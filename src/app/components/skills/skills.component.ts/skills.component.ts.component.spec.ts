import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComponentTsComponent } from './skills.component.ts.component';

describe('SkillsComponentTsComponent', () => {
  let component: SkillsComponentTsComponent;
  let fixture: ComponentFixture<SkillsComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillsComponentTsComponent]
    });
    fixture = TestBed.createComponent(SkillsComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
