import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdMobileModule} from "ng-zorro-antd-mobile";
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { MobileArticlePageComponent } from './page/mobile-article-page/mobile-article-page.component';
import { MobileCategoryPageComponent } from './page/mobile-category-page/mobile-category-page.component';
import { MobileIndexPageComponent } from './page/mobile-index-page/mobile-index-page.component';
import { MobileNotFoundPageComponent } from './page/mobile-not-found-page/mobile-not-found-page.component';
import { MobileSearchPageComponent } from './page/mobile-search-page/mobile-search-page.component';
import { MobileTransitionPageComponent } from './page/mobile-transition-page/mobile-transition-page.component';
import { MobileArticleCardComponent } from './component/mobile-article-card/mobile-article-card.component';
import { MobileArticleContentComponent } from './component/mobile-article-content/mobile-article-content.component';
import { MobileCategoryCardComponent } from './component/mobile-category-card/mobile-category-card.component';
import { MobileDefaultCardComponent } from './component/mobile-default-card/mobile-default-card.component';
import { MobileFooterComponent } from './component/mobile-footer/mobile-footer.component';
import { MobilePaginationComponent } from './component/mobile-pagination/mobile-pagination.component';
import { MobileSearchCardComponent } from './component/mobile-search-card/mobile-search-card.component';
import { EditorShowDirective } from './directive/editor-show/editor-show.directive';
import {NgZorroAntdModule} from "ng-zorro-antd";

@NgModule({
  declarations: [
    AppComponent,
    MobileArticlePageComponent,
    MobileCategoryPageComponent,
    MobileIndexPageComponent,
    MobileNotFoundPageComponent,
    MobileSearchPageComponent,
    MobileTransitionPageComponent,
    MobileArticleCardComponent,
    MobileArticleContentComponent,
    MobileCategoryCardComponent,
    MobileDefaultCardComponent,
    MobileFooterComponent,
    MobilePaginationComponent,
    MobileSearchCardComponent,
    EditorShowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    NgZorroAntdMobileModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
