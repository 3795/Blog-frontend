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

import {FrontendComponent} from './frontend/frontend.component';
import {ArticleCardComponent} from "./frontend/components/article-card/article-card.component";
import {CategoryPageComponent} from "./frontend/pages/category-page/category-page.component";
import {TransitionPageComponent} from "./frontend/pages/transition-page/transition-page.component";
import {NotFoundComponent} from "./frontend/pages/not-found/not-found.component";
import {PaginationComponent} from "./frontend/components/pagination/pagination.component";
import {IndexPageComponent} from "./frontend/pages/index-page/index-page.component";
import {DefaultCardComponent} from "./frontend/components/default-card/default-card.component";
import {CategoryCardComponent} from "./frontend/components/category-card/category-card.component";
import {ArticlePageComponent} from "./frontend/pages/article-page/article-page.component";
import {SearchPageComponent} from "./frontend/pages/search-page/search-page.component";
import {SearchCardComponent} from "./frontend/components/search-card/search-card.component";
import {FrontendService} from "./frontend/service/frontend.service";
import {SiderComponent} from './frontend/components/sider/sider.component';
import { HeaderComponent } from './frontend/components/header/header.component';
import { FooterComponent } from './frontend/components/footer/footer.component';
import { RightOneComponent } from './frontend/components/right-one/right-one.component';
import { RightTwoComponent } from './frontend/components/right-two/right-two.component';
import { RightThreeComponent } from './frontend/components/right-three/right-three.component';
import { ContentPageComponent } from './frontend/pages/content-page/content-page.component';

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
    FrontendComponent,
    EditorWriteDirective,
    SiderComponent,
    HeaderComponent,
    FooterComponent,
    RightOneComponent,
    RightTwoComponent,
    RightThreeComponent,
    ContentPageComponent,
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
    FrontendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
