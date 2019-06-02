import Vue from 'vue'
import Router from 'vue-router'
import CurtainPage from "./views/curtainPage/CurtainPage";
import ArticlePage from "./views/articlePage/ArticlePage";
import NotFoundPage from "./views/404/NotFoundPage";
import HomePage from "./views/homePage/HomePage";
import CategoryPage from "./views/categoryPage/CategoryPage";
import TagPage from "./views/tagPage/TagPage";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
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
      }]
    }, {
      path: '/article/:id',
      name: 'ArticlePage',
      component: ArticlePage
    }, {
      path: '/*',
      name: 'NotFoundPage',
      component: NotFoundPage,
    }
  ]
})
