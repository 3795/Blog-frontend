import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCategoryCardComponent } from './mobile-category-card.component';

describe('MobileCategoryCardComponent', () => {
  let component: MobileCategoryCardComponent;
  let fixture: ComponentFixture<MobileCategoryCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCategoryCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
