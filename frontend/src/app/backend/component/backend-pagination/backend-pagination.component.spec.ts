import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendPaginationComponent } from './backend-pagination.component';

describe('BackendPaginationComponent', () => {
  let component: BackendPaginationComponent;
  let fixture: ComponentFixture<BackendPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
