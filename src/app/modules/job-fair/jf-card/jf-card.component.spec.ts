import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JfCardComponent } from './jf-card.component';

describe('JfCardComponent', () => {
  let component: JfCardComponent;
  let fixture: ComponentFixture<JfCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JfCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JfCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
