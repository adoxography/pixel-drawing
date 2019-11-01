'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/home';
import IDE from '@/components/home/ide';
import About from '@/components/home/about';
import Reference from '@/components/home/reference';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'code',
        component: IDE
      },
      {
        path: 'about',
        component: About
      },
      {
        path: 'ref',
        component: Reference
      },
      {
        path: '*',
        component: IDE
      }
    ]
  }
];

export default new VueRouter({
  routes,
  linkActiveClass: 'active'
});
