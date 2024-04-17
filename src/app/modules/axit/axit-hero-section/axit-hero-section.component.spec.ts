import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxitHeroSectionComponent } from './axit-hero-section.component';

describe('AxitHeroSectionComponent', () => {
  let component: AxitHeroSectionComponent;
  let fixture: ComponentFixture<AxitHeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxitHeroSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxitHeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
