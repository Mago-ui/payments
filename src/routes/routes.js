import { createRouter, createWebHashHistory } from "vue-router";
import PayServices from '../components/PayServices.vue'
import Payments from '../components/Payments.vue'


const routes = [
    { path: "/", component: PayServices },
    { path: "/recargas", component: Payments },
  
  ];


  const router = createRouter({
    history: createWebHashHistory(),
    routes,
  });

  export default router