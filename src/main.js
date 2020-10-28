/*
 * @Descripttion: 
 * @version: 
 * @Author: zml
 * @Date: 2020-10-09 13:44:43
 * @LastEditors: zml
 * @LastEditTime: 2020-10-09 14:39:47
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";

const app = createApp(App)
app.use(router)
app.mount('#app')
