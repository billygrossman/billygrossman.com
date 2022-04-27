import { createApp } from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';
import router from './router';

import './scss/main.scss';
import store from './store'

const app = createApp(App).use(store);

app.use(router);
app.use(VueGtag, {
  config: {
    id: 'G-2CXGQ10LXZ',
  },
});
app.mount('#app');
