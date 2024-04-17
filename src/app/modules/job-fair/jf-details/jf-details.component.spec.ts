import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JfDetailsComponent } from './jf-details.component';

describe('JfDetailsComponent', () => {
  let component: JfDetailsComponent;
  let fixture: ComponentFixture<JfDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JfDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JfDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
