import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePaginationComponent } from './mobile-pagination.component';

describe('MobilePaginationComponent', () => {
  let component: MobilePaginationComponent;
  let fixture: ComponentFixture<MobilePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
