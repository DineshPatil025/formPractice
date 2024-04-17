import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxitFooterComponent } from './axit-footer.component';

describe('AxitFooterComponent', () => {
  let component: AxitFooterComponent;
  let fixture: ComponentFixture<AxitFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxitFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxitFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
