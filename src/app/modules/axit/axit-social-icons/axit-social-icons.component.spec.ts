import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AxitSocialIconsComponent } from './axit-social-icons.component';

describe('AxitSocialIconsComponent', () => {
  let component: AxitSocialIconsComponent;
  let fixture: ComponentFixture<AxitSocialIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AxitSocialIconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AxitSocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
