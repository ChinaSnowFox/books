import { createApp } from 'vue'
import App from './App.vue'
import {router} from "./router";
import ArcoVue from '@arco-design/web-vue';
import {createPinia} from 'pinia'
import '@arco-design/web-vue/dist/arco.css';

const pinia = createPinia()
createApp(App)
    .use(router)
    .use(ArcoVue)
    .use(pinia)
    .mount('#app')
