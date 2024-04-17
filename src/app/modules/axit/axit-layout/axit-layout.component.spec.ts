import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxitLayoutComponent } from './axit-layout.component';

describe('AxitLayoutComponent', () => {
  let component: AxitLayoutComponent;
  let fixture: ComponentFixture<AxitLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxitLayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxitLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
