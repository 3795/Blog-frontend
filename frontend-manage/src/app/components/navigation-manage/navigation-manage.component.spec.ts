import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationManageComponent } from './navigation-manage.component';

describe('NavigationManageComponent', () => {
  let component: NavigationManageComponent;
  let fixture: ComponentFixture<NavigationManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
