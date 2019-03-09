import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ArticlePageComponent} from "./page/article-page/article-page.component";
import {ContentPageComponent} from "./page/content-page/content-page.component";
import {AdaptGuard} from "./guard/adapt.guard";
import {IndexPageComponent} from "./page/index-page/index-page.component";
import {CategoryPageComponent} from "./page/category-page/category-page.component";
import {TagPageComponent} from "./page/tag-page/tag-page.component";
import {SearchPageComponent} from "./page/search-page/search-page.component";
import {NotFoundComponent} from "./page/not-found/not-found.component";
import {TransitionPageComponent} from "./page/transition-page/transition-page.component";

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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
