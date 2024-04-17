import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JfDashComponent } from './jf-dash.component';

describe('JfDashComponent', () => {
  let component: JfDashComponent;
  let fixture: ComponentFixture<JfDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JfDashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JfDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
