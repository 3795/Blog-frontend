import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {AppRouting} from "./app.router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ConsolePageComponent } from './pages/console-page/console-page.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ManageDashboardComponent } from './components/manage-dashboard/manage-dashboard.component';
import { ManageHeaderComponent } from './components/manage-header/manage-header.component';
import { ManageNavigationComponent } from './components/manage-navigation/manage-navigation.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { CategoryManageComponent } from './components/category-manage/category-manage.component';
import { NavigationManageComponent } from './components/navigation-manage/navigation-manage.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { WriteArticleComponent } from './components/article-manage/write-article/write-article.component';
import { EditorWriteDirective } from './directives/editor-write/editor-write.directive';
import { EditorShowDirective } from './directives/editor-show/editor-show.directive';
import { ArticleManageComponent } from './components/article-manage/article-manage/article-manage.component';
import { ArticleRecoverComponent } from './components/article-manage/article-recover/article-recover.component';
import { ArticleDraftboxComponent } from './components/article-manage/article-draftbox/article-draftbox.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ConsolePageComponent,
    ManageDashboardComponent,
    ManageHeaderComponent,
    ManageNavigationComponent,
    BreadCrumbsComponent,
    CategoryManageComponent,
    NavigationManageComponent,
    UserProfileComponent,
    WriteArticleComponent,
    EditorWriteDirective,
    EditorShowDirective,
    ArticleManageComponent,
    ArticleRecoverComponent,
    ArticleDraftboxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    AppRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
