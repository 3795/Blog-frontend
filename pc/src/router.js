import Vue from 'vue'
import Router from 'vue-router'
import CurtainPage from "./views/curtainPage/CurtainPage";
import ArticlePage from "./views/articlePage/ArticlePage";
import NotFoundPage from "./views/404/NotFoundPage";
import HomePage from "./views/homePage/HomePage";
import CategoryPage from "./views/categoryPage/CategoryPage";
import TagPage from "./views/tagPage/TagPage";
import SearchPage from "./views/searchPage/SearchPage";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/article/:id',
      name: 'ArticlePage',
      component: ArticlePage
    }, {
      path: '/',
      component: CurtainPage,
      children: [{
        path: '/',
        name: 'HomePage',
        component: HomePage
      }, {
        path: '/category/:id',
        name: 'CategoryPage',
        component: CategoryPage
      }, {
        path: '/tag/:id',
        name: 'TagPage',
        component: TagPage
      }, {
        path: '/search',
        name: 'SearchPage',
        component: SearchPage
      }, {
        path: '/*',
        name: 'NotFoundPage',
        component: NotFoundPage,
      }]
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
