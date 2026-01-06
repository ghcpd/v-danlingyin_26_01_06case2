import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/HomePage.vue'),
    meta: { title: 'Leonardo da Vinci — Art & Mind' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/AboutPage.vue'),
    meta: { title: 'About Leonardo — Art & Mind' }
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('@/pages/GalleryPage.vue'),
    meta: { title: 'Gallery — Art & Mind' }
  },
  {
    path: '/gallery/:id',
    name: 'ArtworkDetail',
    component: () => import('@/pages/ArtworkDetailPage.vue'),
    meta: { title: 'Artwork — Art & Mind' }
  },
  {
    path: '/exhibition',
    name: 'Exhibition',
    component: () => import('@/pages/ExhibitionPage.vue'),
    meta: { title: 'Exhibition Info — Art & Mind' }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFoundPage.vue'),
    meta: { title: 'Page Not Found — Art & Mind' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0 }
  }
})

router.beforeEach((to, _from, next) => {
  const title = to.meta.title as string | undefined
  if (title) {
    document.title = title
  }
  next()
})

export default router
