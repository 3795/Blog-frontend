import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {NavigationBarComponent} from './components/navigation-bar/navigation-bar.component';
import {NavigationBarService} from "./components/navigation-bar/navigation-bar.service";
import {GetService} from "./service/get.service";
import {TopBarComponent} from './components/top-bar/top-bar.component';
import {DefaultCardComponent} from './components/default-card/default-card.component';
import {IndexPageComponent} from './pages/index-page/index-page.component';
import {ArticleCardComponent} from './components/article-card/article-card.component';
import {PagesService} from "./pages/pages.service";
import {PaginationComponent} from './components/pagination/pagination.component';
import {AppRouting} from "./app.router";
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {TransitionPageComponent} from './pages/transition-page/transition-page.component';
import {CategoryPageComponent} from './pages/category-page/category-page.component';
import {CategoryCardComponent} from './components/category-card/category-card.component';
import {ArticlePageComponent} from './pages/article-page/article-page.component';
import {SearchPageComponent} from './pages/search-page/search-page.component';
import {FormsModule} from "@angular/forms";
import {SearchCardComponent} from './components/search-card/search-card.component';
import { EditorShowDirective } from './directive/editor-show/editor-show.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TopBarComponent,
    DefaultCardComponent,
    IndexPageComponent,
    ArticleCardComponent,
    PaginationComponent,
    NotFoundComponent,
    TransitionPageComponent,
    CategoryPageComponent,
    CategoryCardComponent,
    ArticlePageComponent,
    SearchPageComponent,
    SearchCardComponent,
    EditorShowDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting,
    FormsModule,
  ],
  providers: [
    NavigationBarService,
    GetService,
    PagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
