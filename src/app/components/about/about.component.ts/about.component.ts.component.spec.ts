import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponentTsComponent } from './about.component.ts.component';

describe('AboutComponentTsComponent', () => {
  let component: AboutComponentTsComponent;
  let fixture: ComponentFixture<AboutComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponentTsComponent]
    });
    fixture = TestBed.createComponent(AboutComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
