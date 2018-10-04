import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import {NavigationBarService} from "./components/navigation-bar/navigation-bar.service";
import {GetService} from "./service/get.service";
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { DefaultCardComponent } from './components/default-card/default-card.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { ArticleCardComponent } from './components/article-card/article-card.component';
import {PagesService} from "./pages/pages.service";
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    TopBarComponent,
    DefaultCardComponent,
    IndexPageComponent,
    ArticleCardComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    NavigationBarService,
    GetService,
    PagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
