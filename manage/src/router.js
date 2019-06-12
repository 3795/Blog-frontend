import Vue from 'vue'
import Router from 'vue-router'
import Login from "./views/Login";
import CurtainPage from "./views/CurtainPage";
import Dashboard from "./views/Dashboard";
import ArticleList from "./views/article/ArticleList";
import ArticleEdit from "./views/article/ArticleEdit";

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
        path: '/article/list',
        name: 'articleList',
        component: ArticleList
      }, {
        path: '/article/edit',
        name: 'articleEdit',
        component: ArticleEdit
      }],
    }
  ]
})
