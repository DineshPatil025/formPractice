import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigWatchComponent } from './dig-watch.component';

describe('DigWatchComponent', () => {
  let component: DigWatchComponent;
  let fixture: ComponentFixture<DigWatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigWatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
