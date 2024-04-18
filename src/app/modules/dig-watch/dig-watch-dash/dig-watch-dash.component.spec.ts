import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigWatchDashComponent } from './dig-watch-dash.component';

describe('DigWatchDashComponent', () => {
  let component: DigWatchDashComponent;
  let fixture: ComponentFixture<DigWatchDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigWatchDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigWatchDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
