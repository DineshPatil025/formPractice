import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxitPriceDetailsComponent } from './axit-price-details.component';

describe('AxitPriceDetailsComponent', () => {
  let component: AxitPriceDetailsComponent;
  let fixture: ComponentFixture<AxitPriceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxitPriceDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxitPriceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
