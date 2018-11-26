import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleRecoverComponent } from './article-recover.component';

describe('ArticleRecoverComponent', () => {
  let component: ArticleRecoverComponent;
  let fixture: ComponentFixture<ArticleRecoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleRecoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleRecoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
