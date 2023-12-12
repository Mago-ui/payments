import { createRouter, createWebHashHistory } from "vue-router";
import PayServices from '../components/PayServices.vue'
import Payments from '../components/Payments.vue'
import PageError from '../components/PageError.vue'



const routes = [
    { path: "/", component: PayServices },
    { path: "/recargas", component: Payments },
    { path: "/error", component: PageError },
  ];


  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  export default router