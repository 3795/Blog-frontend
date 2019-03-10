import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgZorroAntdModule} from "ng-zorro-antd";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ArticleDraftboxComponent } from './component/article-manage/article-draftbox/article-draftbox.component';
import { ArticleManageComponent } from './component/article-manage/article-manage/article-manage.component';
import { ArticleRecoverComponent } from './component/article-manage/article-recover/article-recover.component';
import { WriteArticleComponent } from './component/article-manage/write-article/write-article.component';
import { BreadCrumbsComponent } from './component/bread-crumbs/bread-crumbs.component';
import { CarouselManageComponent } from './component/carousel-manage/carousel-manage.component';
import { CategoryManageComponent } from './component/category-manage/category-manage.component';
import { IpManageComponent } from './component/ip-manage/ip-manage.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HeaderComponent } from './component/header/header.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { NavigationManageComponent } from './component/navigation-manage/navigation-manage.component';
import { TagManageComponent } from './component/tag-manage/tag-manage.component';
import { UserProfileComponent } from './component/user-profile/user-profile.component';
import { EditorShowDirective } from './directive/editor-show/editor-show.directive';
import { EditorWriteDirective } from './directive/editor-write/editor-write.directive';
import { ConsolePageComponent } from './page/console-page/console-page.component';
import { LoginPageComponent } from './page/login-page/login-page.component';
import {NgxEchartsModule} from "ngx-echarts";

@NgModule({
  declarations: [
    AppComponent,
    ArticleDraftboxComponent,
    ArticleManageComponent,
    ArticleRecoverComponent,
    WriteArticleComponent,
    BreadCrumbsComponent,
    CarouselManageComponent,
    CategoryManageComponent,
    IpManageComponent,
    DashboardComponent,
    HeaderComponent,
    NavigationComponent,
    NavigationManageComponent,
    TagManageComponent,
    UserProfileComponent,
    EditorShowDirective,
    EditorWriteDirective,
    ConsolePageComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgZorroAntdModule,
    NgxEchartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
