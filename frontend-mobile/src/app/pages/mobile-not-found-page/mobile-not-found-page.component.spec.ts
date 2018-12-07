import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileNotFoundPageComponent } from './mobile-not-found-page.component';

describe('MobileNotFoundPageComponent', () => {
  let component: MobileNotFoundPageComponent;
  let fixture: ComponentFixture<MobileNotFoundPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileNotFoundPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileNotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
