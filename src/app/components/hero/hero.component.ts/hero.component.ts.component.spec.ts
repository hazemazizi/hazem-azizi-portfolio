import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroComponentTsComponent } from './hero.component.ts.component';

describe('HeroComponentTsComponent', () => {
  let component: HeroComponentTsComponent;
  let fixture: ComponentFixture<HeroComponentTsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponentTsComponent]
    });
    fixture = TestBed.createComponent(HeroComponentTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
