import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileArticleContentComponent } from './mobile-article-content.component';

describe('MobileArticleContentComponent', () => {
  let component: MobileArticleContentComponent;
  let fixture: ComponentFixture<MobileArticleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileArticleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileArticleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
