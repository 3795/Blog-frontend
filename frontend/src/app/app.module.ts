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

import {BackendComponent} from './backend/backend.component';
import {LoginPageComponent} from './backend/page/login-page/login-page.component';
import {ConsolePageComponent} from './backend/page/console-page/console-page.component';
import {BackendService} from "./backend/service/backend.service";
import {BackendNavigationComponent} from './backend/component/backend-navigation/backend-navigation.component';
import {BackendHeaderComponent} from './backend/component/backend-header/backend-header.component';
import {BackendDashboardComponent} from './backend/component/backend-dashboard/backend-dashboard.component';
import {CategoryManageComponent} from './backend/component/category-manage/category-manage.component';
import {BackendPaginationComponent} from './backend/component/backend-pagination/backend-pagination.component';
import {BreadCrumbsComponent} from './backend/component/bread-crumbs/bread-crumbs.component';
import {NavigationManageComponent} from './backend/component/navigation-manage/navigation-manage.component';
import {ArticleManageComponent} from './backend/component/article-manage/article-manage/article-manage.component';
import {ArticleDraftboxComponent} from './backend/component/article-manage/article-draftbox/article-draftbox.component';
import {ArticleRecoverComponent} from './backend/component/article-manage/article-recover/article-recover.component';
import {UserInfoComponent} from './backend/component/user-info/user-info.component';
import {WriteArticleComponent} from './backend/component/article-manage/write-article/write-article.component';


import { MobileComponent } from './mobile/mobile.component';
import { MobileIndexPageComponent } from './mobile/pages/mobile-index-page/mobile-index-page.component';
import { MobileDefaultCardComponent } from './mobile/components/mobile-default-card/mobile-default-card.component';
import { MobileArticleCardComponent } from './mobile/components/mobile-article-card/mobile-article-card.component';
import { MobilePaginationComponent } from './mobile/components/mobile-pagination/mobile-pagination.component';
import { MobileFooterComponent } from './mobile/components/mobile-footer/mobile-footer.component';
import { MobileCategoryCardComponent } from './mobile/components/mobile-category-card/mobile-category-card.component';
import { MobileCategoryPageComponent } from './mobile/pages/mobile-category-page/mobile-category-page.component';
import { MobileTransitionPageComponent } from './mobile/pages/mobile-transition-page/mobile-transition-page.component';
import { NotFoundPageComponent } from './mobile/pages/not-found-page/not-found-page.component';
import { MobileArticlePageComponent } from './mobile/pages/mobile-article-page/mobile-article-page.component';
import { MobileSearchPageComponent } from './mobile/pages/mobile-search-page/mobile-search-page.component';
import { MobileSearchCardComponent } from './mobile/components/mobile-search-card/mobile-search-card.component';

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
    BackendComponent,
    LoginPageComponent,
    ConsolePageComponent,
    BackendNavigationComponent,
    BackendHeaderComponent,
    BackendDashboardComponent,
    CategoryManageComponent,
    BackendPaginationComponent,
    BreadCrumbsComponent,
    NavigationManageComponent,
    ArticleManageComponent,
    ArticleDraftboxComponent,
    ArticleRecoverComponent,
    UserInfoComponent,
    WriteArticleComponent,
    EditorWriteDirective,
    SiderComponent,
    HeaderComponent,
    FooterComponent,
    RightOneComponent,
    RightTwoComponent,
    RightThreeComponent,
    ContentPageComponent,
    MobileComponent,
    MobileIndexPageComponent,
    MobileDefaultCardComponent,
    MobileArticleCardComponent,
    MobilePaginationComponent,
    MobileFooterComponent,
    MobileCategoryCardComponent,
    MobileCategoryPageComponent,
    MobileTransitionPageComponent,
    NotFoundPageComponent,
    MobileArticlePageComponent,
    MobileSearchPageComponent,
    MobileSearchCardComponent,
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
    BackendService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
