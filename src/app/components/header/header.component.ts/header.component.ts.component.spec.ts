import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponentTsComponent } from './header.component.ts.component';

describe('HeaderComponentTsComponent', () => {
  let component: HeaderComponentTsComponent;
  let fixture: ComponentFixture<HeaderComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponentTsComponent]
    });
    fixture = TestBed.createComponent(HeaderComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
