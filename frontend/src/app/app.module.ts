import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {AppComponent} from './app.component';
import {AppRouting} from "./app.router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {NgZorroAntdModule} from "ng-zorro-antd";
import {NgZorroAntdMobileModule} from "ng-zorro-antd-mobile";


import {HttpService} from "./service/http.service";
import {EditorShowDirective} from './directive/editor-show/editor-show.directive';
import {EditorWriteDirective} from './directive/editor-write/editor-write.directive';
import {DefaultCardComponent} from "./components/default-card/default-card.component";
import {PaginationComponent} from "./components/pagination/pagination.component";
import {ArticleCardComponent} from "./components/article-card/article-card.component";
import {IndexPageComponent} from "./pages/index-page/index-page.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {TransitionPageComponent} from "./pages/transition-page/transition-page.component";
import {CategoryPageComponent} from "./pages/category-page/category-page.component";
import {CategoryCardComponent} from "./components/category-card/category-card.component";
import {ArticlePageComponent} from "./pages/article-page/article-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {SearchCardComponent} from "./components/search-card/search-card.component";
import {SiderComponent} from "./components/sider/sider.component";
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {ContentPageComponent} from "./pages/content-page/content-page.component";
import { ArticleContentComponent } from './components/article-content/article-content.component';
import { TagPageComponent } from './pages/tag-page/tag-page.component';
import { TagCardComponent } from './components/tag-card/tag-card.component';
import { CarouselImgComponent } from './components/carousel-img/carousel-img.component';
import { TagComponent } from './components/tag/tag.component';
import { LinksComponent } from './components/links/links.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultCardComponent,
    IndexPageComponent,
    ArticleCardComponent,
    PaginationComponent,
    NotFoundComponent,
    TransitionPageComponent,
    CategoryPageComponent,
    CategoryCardComponent,
    ArticlePageComponent,
    SearchPageComponent,
    SearchCardComponent,
    EditorShowDirective,
    EditorWriteDirective,
    SiderComponent,
    HeaderComponent,
    FooterComponent,
    ContentPageComponent,
    ArticleContentComponent,
    TagPageComponent,
    TagCardComponent,
    CarouselImgComponent,
    TagComponent,
    LinksComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRouting,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    NgZorroAntdMobileModule,
  ],
  providers: [
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
