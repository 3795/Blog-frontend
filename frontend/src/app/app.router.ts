import {RouterModule, Routes} from "@angular/router";
import {IndexPageComponent} from "./pages/index-page/index-page.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {TransitionPageComponent} from "./pages/transition-page/transition-page.component";
import {CategoryPageComponent} from "./pages/category-page/category-page.component";
import {ArticlePageComponent} from "./pages/article-page/article-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";

const routes: Routes = [
  {path: '', component: IndexPageComponent},
  {path: 'category/:id', component: CategoryPageComponent},
  {path: "article/:id", component: ArticlePageComponent},
  {path: "search", component: SearchPageComponent},
  {path: "404", pathMatch: "full", component: NotFoundComponent},
  {path: "transitionPage", pathMatch: "full", component: TransitionPageComponent},
  {path: "**", pathMatch: "full", component: NotFoundComponent}
];

export const AppRouting = RouterModule.forRoot(routes);
