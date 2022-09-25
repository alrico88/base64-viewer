/* eslint-disable no-inline-comments */

import ImageDecoder from '../components/ImageDecoder.vue';
import TheDecoder from '../components/TheDecoder.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      image: ImageDecoder,
      sidebar: TheDecoder,
    },
  },
  {
    path: '/encode',
    name: 'Encode',
    components: {
      image: () => import('../components/ImageDrop.vue'),
      sidebar: () => import('../components/TheEncoder.vue'),
    },
  },
];

export default createRouter({
  history: createWebHistory(),
  base: import.meta.BASE_URL,
  routes,
});
