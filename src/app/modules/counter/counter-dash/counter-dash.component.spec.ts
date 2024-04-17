import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDashComponent } from './counter-dash.component';

describe('CounterDashComponent', () => {
  let component: CounterDashComponent;
  let fixture: ComponentFixture<CounterDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
