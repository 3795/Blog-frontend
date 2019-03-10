import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginPageComponent} from "./page/login-page/login-page.component";
import {ConsolePageComponent} from "./page/console-page/console-page.component";
import {AuthGuard} from "./guard/auth.guard";
import {CategoryManageComponent} from "./component/category-manage/category-manage.component";
import {TagManageComponent} from "./component/tag-manage/tag-manage.component";
import {NavigationManageComponent} from "./component/navigation-manage/navigation-manage.component";
import {UserProfileComponent} from "./component/user-profile/user-profile.component";
import {CarouselManageComponent} from "./component/carousel-manage/carousel-manage.component";
import {IpManageComponent} from "./component/ip-manage/ip-manage.component";
import {ArticleManageComponent} from "./component/article-manage/article-manage/article-manage.component";
import {ArticleDraftboxComponent} from "./component/article-manage/article-draftbox/article-draftbox.component";
import {ArticleRecoverComponent} from "./component/article-manage/article-recover/article-recover.component";
import {WriteArticleComponent} from "./component/article-manage/write-article/write-article.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'console', component: ConsolePageComponent, data: {breadcrumb: "控制台"},
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: '/console/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent, data: {breadcrumb: "仪表盘"}},
      {path: 'category', component: CategoryManageComponent, data: {breadcrumb: "分类管理"}},
      {path: 'tag', component: TagManageComponent, data: {breadcrumb: "标签管理"}},
      {path: 'navigation', component: NavigationManageComponent, data: {breadcrumb: "导航管理"}},
      {path: 'user', component: UserProfileComponent, data: {breadcrumb: "个人中心"}},
      {path: 'carousel', component: CarouselManageComponent, data: {breadcrumb: "轮播图管理"}},
      {path: 'ip', component: IpManageComponent, data: {breadcrumb: "IP管理"}},
      {path: 'article', data: {breadcrumb: "文章管理"},
        children: [
          {path: '', redirectTo: "/manage/console/article/list", pathMatch: 'full'},
          {path: 'list', component: ArticleManageComponent, data: {breadcrumb: "文章列表"}},
          {path: 'draft', component: ArticleDraftboxComponent, data: {breadcrumb: "草稿箱"}},
          {path: 'recover', component: ArticleRecoverComponent, data: {breadcrumb: "回收站"}},
          {path: 'write', component: WriteArticleComponent, data: {breadcrumb: '写文章'}},
          {path: 'write/:id', component: WriteArticleComponent, data: {breadcrumb: '编辑文章'}}
        ]}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
