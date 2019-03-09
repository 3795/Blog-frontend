import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileArticleCardComponent } from './mobile-article-card.component';

describe('MobileArticleCardComponent', () => {
  let component: MobileArticleCardComponent;
  let fixture: ComponentFixture<MobileArticleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileArticleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
