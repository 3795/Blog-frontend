import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {AppRouting} from "./app.router";
import {FormsModule} from "@angular/forms";
import { EditorShowDirective } from './directive/editor-show/editor-show.directive';
import { FrontendComponent } from './frontend/frontend.component';
import {NavigationBarComponent} from "./frontend/components/navigation-bar/navigation-bar.component";
import {ArticleCardComponent} from "./frontend/components/article-card/article-card.component";
import {CategoryPageComponent} from "./frontend/pages/category-page/category-page.component";
import {TransitionPageComponent} from "./frontend/pages/transition-page/transition-page.component";
import {NotFoundComponent} from "./frontend/pages/not-found/not-found.component";
import {PaginationComponent} from "./frontend/components/pagination/pagination.component";
import {IndexPageComponent} from "./frontend/pages/index-page/index-page.component";
import {DefaultCardComponent} from "./frontend/components/default-card/default-card.component";
import {TopBarComponent} from "./frontend/components/top-bar/top-bar.component";
import {CategoryCardComponent} from "./frontend/components/category-card/category-card.component";
import {ArticlePageComponent} from "./frontend/pages/article-page/article-page.component";
import {SearchPageComponent} from "./frontend/pages/search-page/search-page.component";
import {SearchCardComponent} from "./frontend/components/search-card/search-card.component";
import {FrontendService} from "./frontend/service/frontend.service";
import {NavigationBarService} from "./frontend/components/navigation-bar/navigation-bar.service";
import {HttpService} from "./service/http.service";
import { BackendComponent } from './backend/backend.component';
import { LoginPageComponent } from './backend/page/login-page/login-page.component';
import {ElModule} from "element-angular/release/element-angular.module";
import { ConsolePageComponent } from './backend/page/console-page/console-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BackendService} from "./backend/service/backend.service";
import { BackendNavigationComponent } from './backend/component/backend-navigation/backend-navigation.component';
import { BackendHeaderComponent } from './backend/component/backend-header/backend-header.component';
import { BackendDashboardComponent } from './backend/component/backend-dashboard/backend-dashboard.component';
import { CategoryManageComponent } from './backend/component/category-manage/category-manage.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TopBarComponent,
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    BrowserAnimationsModule,
    FormsModule,
    ElModule.forRoot(),
  ],
  providers: [
    HttpService,
    FrontendService,
    NavigationBarService,
    BackendService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
