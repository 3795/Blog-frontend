import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MobileIndexPageComponent} from "./page/mobile-index-page/mobile-index-page.component";
import {MobileCategoryPageComponent} from "./page/mobile-category-page/mobile-category-page.component";
import {MobileArticlePageComponent} from "./page/mobile-article-page/mobile-article-page.component";
import {MobileSearchPageComponent} from "./page/mobile-search-page/mobile-search-page.component";
import {MobileTransitionPageComponent} from "./page/mobile-transition-page/mobile-transition-page.component";
import {MobileNotFoundPageComponent} from "./page/mobile-not-found-page/mobile-not-found-page.component";

const routes: Routes = [
  {path: '', component: MobileIndexPageComponent},
  {path: 'category/:id', component: MobileCategoryPageComponent},
  {path: "article/:id", component: MobileArticlePageComponent},
  {path: "search", component: MobileSearchPageComponent},
  {path: "transition", pathMatch: "full", component: MobileTransitionPageComponent},
  {path: "404", pathMatch: "full", component: MobileNotFoundPageComponent},
  {path: "**", pathMatch: "full", component: MobileNotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
