import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpService} from "./service/HttpService";
import { SiderComponent } from './component/sider/sider.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ArticlePageComponent } from './page/article-page/article-page.component';
import { CategoryPageComponent } from './page/category-page/category-page.component';
import { ContentPageComponent } from './page/content-page/content-page.component';
import { IndexPageComponent } from './page/index-page/index-page.component';
import { NotFoundComponent } from './page/not-found/not-found.component';
import { SearchPageComponent } from './page/search-page/search-page.component';
import { TagPageComponent } from './page/tag-page/tag-page.component';
import { TransitionPageComponent } from './page/transition-page/transition-page.component';
import { ArticleCardComponent } from './component/article-card/article-card.component';
import { ArticleContentComponent } from './component/article-content/article-content.component';
import { CarouselImgComponent } from './component/carousel-img/carousel-img.component';
import { CategoryCardComponent } from './component/category-card/category-card.component';
import { DefaultCardComponent } from './component/default-card/default-card.component';
import { LinksComponent } from './component/links/links.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { SearchCardComponent } from './component/search-card/search-card.component';
import { TagComponent } from './component/tag/tag.component';
import { TagCardComponent } from './component/tag-card/tag-card.component';
import { EditorShowDirective } from './directive/editor-show/editor-show.directive';

@NgModule({
  declarations: [
    AppComponent,
    SiderComponent,
    HeaderComponent,
    FooterComponent,
    ArticlePageComponent,
    CategoryPageComponent,
    ContentPageComponent,
    IndexPageComponent,
    NotFoundComponent,
    SearchPageComponent,
    TagPageComponent,
    TransitionPageComponent,
    ArticleCardComponent,
    ArticleContentComponent,
    CarouselImgComponent,
    CategoryCardComponent,
    DefaultCardComponent,
    LinksComponent,
    PaginationComponent,
    SearchCardComponent,
    TagComponent,
    TagCardComponent,
    EditorShowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
