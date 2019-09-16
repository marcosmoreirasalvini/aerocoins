import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/product/:id',
      name: 'product',
      props: true,
      component: () => import('./views/Product.vue')
    },
  ]
});
