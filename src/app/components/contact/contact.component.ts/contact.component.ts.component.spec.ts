import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponentTsComponent } from './contact.component.ts.component';

describe('ContactComponentTsComponent', () => {
  let component: ContactComponentTsComponent;
  let fixture: ComponentFixture<ContactComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponentTsComponent]
    });
    fixture = TestBed.createComponent(ContactComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
