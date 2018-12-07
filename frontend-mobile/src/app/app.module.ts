import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {NgZorroAntdMobileModule} from "ng-zorro-antd-mobile";
import {AppRouting} from "./app.router";
import {HttpClientModule} from "@angular/common/http";
import { MobileFooterComponent } from './components/mobile-footer/mobile-footer.component';
import { MobileIndexPageComponent } from './pages/mobile-index-page/mobile-index-page.component';
import { MobileDefaultCardComponent } from './components/mobile-default-card/mobile-default-card.component';
import { MobilePaginationComponent } from './components/mobile-pagination/mobile-pagination.component';
import { MobileArticleCardComponent } from './components/mobile-article-card/mobile-article-card.component';
import { MobileCategoryCardComponent } from './components/mobile-category-card/mobile-category-card.component';
import { MobileMobileSearchCardComponent } from './components/mobile-mobile-search-card/mobile-mobile-search-card.component';
import { MobileCategoryPageComponent } from './pages/mobile-category-page/mobile-category-page.component';
import { MobileTransitionPageComponent } from './pages/mobile-transition-page/mobile-transition-page.component';
import { MobileNotFoundPageComponent } from './pages/mobile-not-found-page/mobile-not-found-page.component';
import { MobileSearchCardComponent } from './components/mobile-search-card/mobile-search-card.component';
import { MobileSearchPageComponent } from './pages/mobile-search-page/mobile-search-page.component';
import {FormsModule} from "@angular/forms";
import { MobileArticlePageComponent } from './pages/mobile-article-page/mobile-article-page.component';
import { EditorShowDirective } from './directives/editor-show/editor-show.directive';
import { MobileArticleContentComponent } from './components/mobile-article-content/mobile-article-content.component';


@NgModule({
  declarations: [
    AppComponent,
    MobileFooterComponent,
    MobileIndexPageComponent,
    MobileDefaultCardComponent,
    MobilePaginationComponent,
    MobileArticleCardComponent,
    MobileCategoryCardComponent,
    MobileMobileSearchCardComponent,
    MobileCategoryPageComponent,
    MobileTransitionPageComponent,
    MobileNotFoundPageComponent,
    MobileSearchCardComponent,
    MobileSearchPageComponent,
    MobileArticlePageComponent,
    EditorShowDirective,
    MobileArticleContentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    NgZorroAntdMobileModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
