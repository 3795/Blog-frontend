import {RouterModule, Routes} from "@angular/router";
import {ArticlePageComponent} from "./pages/article-page/article-page.component";
import {ContentPageComponent} from "./pages/content-page/content-page.component";
import {IndexPageComponent} from "./pages/index-page/index-page.component";
import {CategoryPageComponent} from "./pages/category-page/category-page.component";
import {SearchPageComponent} from "./pages/search-page/search-page.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {TransitionPageComponent} from "./pages/transition-page/transition-page.component";
import {AdaptGuard} from "./guard/adapt.guard";
import {TagPageComponent} from "./pages/tag-page/tag-page.component";

const routes: Routes = [

  {path: "article/:id", component: ArticlePageComponent, canActivate: [AdaptGuard]},
  {
    path: '', component: ContentPageComponent, canActivateChild: [AdaptGuard], children: [
      {path: '', component: IndexPageComponent},
      {path: 'category/:id', component: CategoryPageComponent},
      {path: 'tag/:id', component: TagPageComponent},
      {path: "search", component: SearchPageComponent},
      {path: "404", pathMatch: "full", component: NotFoundComponent},
      {path: "transitionPage", pathMatch: "full", component: TransitionPageComponent},
      {path: "**", pathMatch: "full", component: NotFoundComponent}
    ]
  },

];

export const AppRouting = RouterModule.forRoot(routes);
