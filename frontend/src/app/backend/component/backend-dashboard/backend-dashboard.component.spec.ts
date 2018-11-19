import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendDashboardComponent } from './backend-dashboard.component';

describe('BackendDashboardComponent', () => {
  let component: BackendDashboardComponent;
  let fixture: ComponentFixture<BackendDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackendDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackendDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
