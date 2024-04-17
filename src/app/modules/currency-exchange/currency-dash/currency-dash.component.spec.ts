import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyDashComponent } from './currency-dash.component';

describe('CurrencyDashComponent', () => {
  let component: CurrencyDashComponent;
  let fixture: ComponentFixture<CurrencyDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
