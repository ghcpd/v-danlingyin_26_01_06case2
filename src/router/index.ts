import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/HomePage.vue")
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../pages/AboutPage.vue")
    },
    {
      path: "/gallery",
      name: "gallery",
      component: () => import("../pages/GalleryPage.vue")
    },
    {
      path: "/gallery/:id",
      name: "artwork-detail",
      component: () => import("../pages/ArtworkDetailPage.vue")
    },
    {
      path: "/exhibition",
      name: "exhibition",
      component: () => import("../pages/ExhibitionPage.vue")
    }
  ],
  scrollBehavior() {
    return { top: 0 };
  }
});

export default router;
