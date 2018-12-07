import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileArticlePageComponent } from './mobile-article-page.component';

describe('MobileArticlePageComponent', () => {
  let component: MobileArticlePageComponent;
  let fixture: ComponentFixture<MobileArticlePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileArticlePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileArticlePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
