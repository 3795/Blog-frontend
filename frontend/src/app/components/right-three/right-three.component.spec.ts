import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightThreeComponent } from './right-three.component';

describe('RightThreeComponent', () => {
  let component: RightThreeComponent;
  let fixture: ComponentFixture<RightThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
