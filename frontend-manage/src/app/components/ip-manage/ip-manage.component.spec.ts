import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpManageComponent } from './ip-manage.component';

describe('IpManageComponent', () => {
  let component: IpManageComponent;
  let fixture: ComponentFixture<IpManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
