import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterComponentTsComponent } from './footer.component.ts.component';

describe('FooterComponentTsComponent', () => {
  let component: FooterComponentTsComponent;
  let fixture: ComponentFixture<FooterComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponentTsComponent]
    });
    fixture = TestBed.createComponent(FooterComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
