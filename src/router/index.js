import { createRouter, createWebHistory } from 'vue-router'
import App from '/src/App.vue'
import Home from '/src/components/Home.vue'
import Music from '/src/components/Music.vue'
import Merch from '/src/components/Merch.vue'
import Contact from '/src/components/Contact.vue'
import config from '../assets/config.json'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
          title: "Home"
        },
    },
    {
        path: '/music',
        name: 'Music',
        component: Music,
        meta: {
          title: "Music"
        }
    },
    {
        path: '/merch',
        name: 'Merch',
        component: Merch,
        meta: {
          title: "Merch"
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
          title: "Contact"
        }
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
  document.title = `${config.bandname} - ${to.meta.title}`;
  next();
})

export default router
