import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileTransitionPageComponent } from './mobile-transition-page.component';

describe('MobileTransitionPageComponent', () => {
  let component: MobileTransitionPageComponent;
  let fixture: ComponentFixture<MobileTransitionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTransitionPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileTransitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
