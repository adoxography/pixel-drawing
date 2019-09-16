'use strict';

import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home';
import IDE from '@/components/home/IDE';
import About from '@/components/home/About';
import Reference from '@/components/home/Reference';

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
