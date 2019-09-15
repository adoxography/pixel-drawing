import Home from '@/components/Home';
import IDE from '@/components/home/IDE';
import About from '@/components/home/About';
import Reference from '@/components/home/Reference';

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

export default routes;
