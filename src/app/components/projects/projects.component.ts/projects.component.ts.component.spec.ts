import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponentTsComponent } from './projects.component.ts.component';

describe('ProjectsComponentTsComponent', () => {
  let component: ProjectsComponentTsComponent;
  let fixture: ComponentFixture<ProjectsComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponentTsComponent]
    });
    fixture = TestBed.createComponent(ProjectsComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
