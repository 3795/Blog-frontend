import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login";
import CurtainPage from "./views/CurtainPage";
import Dashboard from "./views/Dashboard";
import ArticleList from "./views/article/ArticleList";
import ArticleEdit from "./views/article/ArticleEdit";
import DraftBox from "./views/article/DraftBox";
import Recycle from "./views/article/Recycle";
import CategoryPage from "./views/CategoryPage";
import TagPage from "./views/TagPage";
import NavigationPage from "./views/NavigationPage";
import IpPage from "./views/IpPage";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    }, {
      path: '/console',
      component: CurtainPage,
      children: [{
        path: '/',
        name: 'dashboard',
        component: Dashboard
      }, {
        path: '/console/article/list',
        name: 'articleList',
        component: ArticleList
      }, {
        path: '/console/article/edit/:id',
        name: 'articleEdit',
        component: ArticleEdit
      }, {
        path: '/console/article/draft',
        name: 'draftBox',
        component: DraftBox
      }, {
        path: '/console/article/recycle',
        name: 'recycle',
        component: Recycle
      }, {
        path: '/console/category',
        name: 'categoryPage',
        component: CategoryPage
      }, {
        path: '/console/tag',
        name: 'tagPage',
        component: TagPage
      }, {
        path: '/console/navigation',
        name: 'navigationPage',
        component: NavigationPage
      }, {
        path: '/console/ip',
        name: 'ipPage',
        component: IpPage
      }],
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return {x: 0, y: 0}
  }
})
