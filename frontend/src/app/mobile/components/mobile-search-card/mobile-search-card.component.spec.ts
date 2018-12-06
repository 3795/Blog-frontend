import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSearchCardComponent } from './mobile-search-card.component';

describe('MobileSearchCardComponent', () => {
  let component: MobileSearchCardComponent;
  let fixture: ComponentFixture<MobileSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileSearchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
