import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxitFeedbackComponent } from './axit-feedback.component';

describe('AxitFeedbackComponent', () => {
  let component: AxitFeedbackComponent;
  let fixture: ComponentFixture<AxitFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxitFeedbackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxitFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
