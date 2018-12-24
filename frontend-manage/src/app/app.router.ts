/**
 * Create By Seven.wk
 * Description: 管理系统的路由
 * Create At 2018/12/7
 */
import {RouterModule, Routes} from "@angular/router";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {ConsolePageComponent} from "./pages/console-page/console-page.component";
import {AuthGuard} from "./guard/auth.guard";
import {ManageDashboardComponent} from "./components/manage-dashboard/manage-dashboard.component";
import {CategoryManageComponent} from "./components/category-manage/category-manage.component";
import {NavigationManageComponent} from "./components/navigation-manage/navigation-manage.component";
import {UserProfileComponent} from "./components/user-profile/user-profile.component";
import {WriteArticleComponent} from "./components/article-manage/write-article/write-article.component";
import {ArticleManageComponent} from "./components/article-manage/article-manage/article-manage.component";
import {ArticleDraftboxComponent} from "./components/article-manage/article-draftbox/article-draftbox.component";
import {ArticleRecoverComponent} from "./components/article-manage/article-recover/article-recover.component";
import {TagManageComponent} from "./components/tag-manage/tag-manage.component";

const routes: Routes = [
  {path: '', component: LoginPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'console', component: ConsolePageComponent, data: {breadcrumb: "控制台"},
    canActivateChild: [AuthGuard],
    children: [
      {path: '', redirectTo: '/console/dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: ManageDashboardComponent, data: {breadcrumb: "仪表盘"}},
      {path: 'category', component: CategoryManageComponent, data: {breadcrumb: "分类管理"}},
      {path: 'tag', component: TagManageComponent, data: {breadcrumb: "标签管理"}},
      {path: 'navigation', component: NavigationManageComponent, data: {breadcrumb: "导航管理"}},
      {path: 'user', component: UserProfileComponent, data: {breadcrumb: "个人中心"}},
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

export const AppRouting = RouterModule.forRoot(routes);
