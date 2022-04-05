import { createApp } from 'vue';
import App from './App.vue';
import VueGtag from 'vue-gtag';
import router from './router';

import './scss/main.scss';

const app = createApp(App);

app.use(router);
app.use(VueGtag, {
  config: {
    id: 'G-2CXGQ10LXZ',
  },
});
app.mount('#app');
