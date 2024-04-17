import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxitFeaturesComponent } from './axit-features.component';

describe('AxitFeaturesComponent', () => {
  let component: AxitFeaturesComponent;
  let fixture: ComponentFixture<AxitFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxitFeaturesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxitFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
