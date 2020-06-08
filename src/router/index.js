/* eslint-disable no-inline-comments */

import Vue from 'vue';
import VueRouter from 'vue-router';
import ImageDecoder from '../components/ImageDecoder.vue';
import Decoder from '../components/Decoder.vue';

Vue.use(VueRouter);

  const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      image: ImageDecoder,
      sidebar: Decoder,
    },
  },
  {
    path: '/encode',
    name: 'Encode',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      image: () => import(/* webpackChunkName: "imagedrop" */ '../components/ImageDrop.vue'),
      sidebar: () => import(/* webpackChunkName: "encoder" */ '../components/Encoder.vue'),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
