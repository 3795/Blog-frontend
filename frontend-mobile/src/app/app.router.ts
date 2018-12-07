/**
 * Create By Seven.wk
 * Description: 路由文件
 * Create At 2018/12/6
 */
import {RouterModule, Routes} from "@angular/router";
import {MobileIndexPageComponent} from "./pages/mobile-index-page/mobile-index-page.component";
import {MobileCategoryPageComponent} from "./pages/mobile-category-page/mobile-category-page.component";
import {MobileTransitionPageComponent} from "./pages/mobile-transition-page/mobile-transition-page.component";
import {MobileNotFoundPageComponent} from "./pages/mobile-not-found-page/mobile-not-found-page.component";
import {MobileSearchPageComponent} from "./pages/mobile-search-page/mobile-search-page.component";
import {MobileArticlePageComponent} from "./pages/mobile-article-page/mobile-article-page.component";

const routes: Routes = [
  {path: '', component: MobileIndexPageComponent},
  {path: 'category/:id', component: MobileCategoryPageComponent},
  {path: "article/:id", component: MobileArticlePageComponent},
  {path: "search", component: MobileSearchPageComponent},
  {path: "transition", pathMatch: "full", component: MobileTransitionPageComponent},
  {path: "404", pathMatch: "full", component: MobileNotFoundPageComponent},
  {path: "**", pathMatch: "full", component: MobileNotFoundPageComponent},
];

export const AppRouting = RouterModule.forRoot(routes);
