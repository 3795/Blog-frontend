import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileIndexPageComponent } from './mobile-index-page.component';

describe('MobileIndexPageComponent', () => {
  let component: MobileIndexPageComponent;
  let fixture: ComponentFixture<MobileIndexPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileIndexPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileIndexPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
