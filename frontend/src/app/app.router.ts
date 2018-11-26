import {RouterModule, Routes} from "@angular/router";

import {FrontendComponent} from "./frontend/frontend.component";
import {IndexPageComponent} from "./frontend/pages/index-page/index-page.component";
import {CategoryPageComponent} from "./frontend/pages/category-page/category-page.component";
import {ArticlePageComponent} from "./frontend/pages/article-page/article-page.component";
import {SearchPageComponent} from "./frontend/pages/search-page/search-page.component";
import {NotFoundComponent} from "./frontend/pages/not-found/not-found.component";
import {TransitionPageComponent} from "./frontend/pages/transition-page/transition-page.component";
import {BackendComponent} from "./backend/backend.component";
import {LoginPageComponent} from "./backend/page/login-page/login-page.component";
import {ConsolePageComponent} from "./backend/page/console-page/console-page.component";
import {BackendDashboardComponent} from "./backend/component/backend-dashboard/backend-dashboard.component";
import {CategoryManageComponent} from "./backend/component/category-manage/category-manage.component";
import {AuthGuard} from "./backend/guard/auth.guard";
import {NavigationManageComponent} from "./backend/component/navigation-manage/navigation-manage.component";
import {ArticleManageComponent} from "./backend/component/article-manage/article-manage/article-manage.component";
import {ArticleDraftboxComponent} from "./backend/component/article-manage/article-draftbox/article-draftbox.component";
import {ArticleRecoverComponent} from "./backend/component/article-manage/article-recover/article-recover.component";
import {UserInfoComponent} from "./backend/component/user-info/user-info.component";

const routes: Routes = [

  {path: 'manage', component: BackendComponent, children: [
      {path: '', component: LoginPageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'console', component: ConsolePageComponent, data: {breadcrumb: "控制台"},
        canActivateChild: [AuthGuard],
        children: [
          {path: '', redirectTo: '/manage/console/dashboard', pathMatch: 'full'},
          {path: 'dashboard', component: BackendDashboardComponent, data: {breadcrumb: "仪表盘"}},
          {path: 'category', component: CategoryManageComponent, data: {breadcrumb: "分类管理"}},
          {path: 'navigation', component: NavigationManageComponent, data: {breadcrumb: "导航管理"}},
          {path: 'userInfo', component: UserInfoComponent, data: {breadcrumb: "个人中心"}},
          {path: 'article', data: {breadcrumb: "文章管理"},
            children: [
              {path: '', redirectTo: "/manage/console/article/list", pathMatch: 'full'},
              {path: 'list', component: ArticleManageComponent, data: {breadcrumb: "文章列表"}},
              {path: 'draft', component: ArticleDraftboxComponent, data: {breadcrumb: "草稿箱"}},
              {path: 'recover', component: ArticleRecoverComponent, data: {breadcrumb: "回收站"}}
            ]}
        ]}
    ]},

  {path: '', component: FrontendComponent, children: [
      {path: '', component: IndexPageComponent},
      {path: 'category/:id', component: CategoryPageComponent},
      {path: "article/:id", component: ArticlePageComponent},
      {path: "search", component: SearchPageComponent},
      {path: "404", pathMatch: "full", component: NotFoundComponent},
      {path: "transitionPage", pathMatch: "full", component: TransitionPageComponent},
      {path: "**", pathMatch: "full", component: NotFoundComponent}
    ],
  }
];

export const AppRouting = RouterModule.forRoot(routes);
