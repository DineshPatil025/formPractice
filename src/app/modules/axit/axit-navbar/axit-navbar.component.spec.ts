import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxitNavbarComponent } from './axit-navbar.component';

describe('AxitNavbarComponent', () => {
  let component: AxitNavbarComponent;
  let fixture: ComponentFixture<AxitNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxitNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxitNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
