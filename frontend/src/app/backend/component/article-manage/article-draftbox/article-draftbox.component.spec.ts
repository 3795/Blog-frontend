import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDraftboxComponent } from './article-draftbox.component';

describe('ArticleDraftboxComponent', () => {
  let component: ArticleDraftboxComponent;
  let fixture: ComponentFixture<ArticleDraftboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleDraftboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDraftboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
