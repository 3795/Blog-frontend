import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCategoryPageComponent } from './mobile-category-page.component';

describe('MobileCategoryPageComponent', () => {
  let component: MobileCategoryPageComponent;
  let fixture: ComponentFixture<MobileCategoryPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCategoryPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
