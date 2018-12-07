import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDefaultCardComponent } from './mobile-default-card.component';

describe('MobileDefaultCardComponent', () => {
  let component: MobileDefaultCardComponent;
  let fixture: ComponentFixture<MobileDefaultCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDefaultCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDefaultCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
