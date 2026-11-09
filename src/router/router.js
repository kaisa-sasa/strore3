import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../pages/LandingPages.vue";
import ProductPage from "../pages/ProductPage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPages.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: LandingPage },
    { path: "/product", component: ProductPage },
    { path: "/about", component: AboutPage },
    { path: "/contact", component: ContactPage },
  ],
});
export default router;
