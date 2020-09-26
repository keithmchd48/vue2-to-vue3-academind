import { createApp } from 'vue';
import {createRouter, createWebHistory} from "vue-router";

import App from './App.vue';
import WelcomeScreen from "./pages/WelcomeScreen";
import UsersList from "./pages/UsersList";

// Add router!
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: WelcomeScreen },
    { path: '/users', component: UsersList },
  ],
})
const app = createApp(App)
app.use(router)
// to avoid the initial transition on router-view
// otherwise just use "app.mount('#app')"
router.isReady().then(() => {
  app.mount('#app')
})
