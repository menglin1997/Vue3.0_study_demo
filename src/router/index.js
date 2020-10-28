/*
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-10-09 14:11:18
 * @LastEditors: zml
 * @LastEditTime: 2020-10-10 17:16:43
 */
// import VueRouter from "vue-router";
import login from "../view/login/index.vue";
import home from "../view/home/index.vue";
import { createRouter, createWebHashHistory  } from 'vue-router'

const routerHistory = createWebHashHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: login
    },
    {
      path: '/login',
      component: login
    },
    {
      path: '/home',
      component: home
    }
  ]
})
export default router
// const routes = [
//   {
//     path: "/",
//     name: "login",
//     component: login
//   },
// ];

// const router = new VueRouter({
//   // mode: "history",
//   // base: process.env.BASE_URL,
//   routes
// });
// router.beforeEach((to, from, next) => {
//   const token = window.localStorage.getItem("token");
//   console.log(to, "to");
//   if (to.path != "/login") {
//     if (token) {
//       return next();
//     } else {
//       return next("/login");
//     }
//   } else {
//     return next();
//   }
// });
// console.log(router, " process.env.BASE_URL");

// export default router;
