import { createRouter, createWebHashHistory } from 'vue-router'
import config from "@/assets/config.js";

const modules = import.meta.glob('../views/**/**.vue')

const routes = config.routes.map(item => {
  return ({
    path: item.path,
    component: modules[`../views/${item.view}`],
  })
})

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
