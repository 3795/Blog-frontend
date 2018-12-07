import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileMobileSearchCardComponent } from './mobile-mobile-search-card.component';

describe('MobileMobileSearchCardComponent', () => {
  let component: MobileMobileSearchCardComponent;
  let fixture: ComponentFixture<MobileMobileSearchCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileMobileSearchCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileMobileSearchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
