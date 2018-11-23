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

const routes: Routes = [

  {path: 'manage', component: BackendComponent, children: [
      {path: '', component: LoginPageComponent},
      {path: 'login', component: LoginPageComponent},
      {path: 'console', component: ConsolePageComponent,
        canActivateChild: [AuthGuard],
        children: [
          {path: '', component: BackendDashboardComponent},
          {path: 'dashboard', component: BackendDashboardComponent},
          {path: 'category', component: CategoryManageComponent},
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
