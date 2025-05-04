import './assets/main.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';

import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { ToastService } from 'primevue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: 'p',
      darkModeSelector: 'system',
      cssLayer: false,
    },
  },
});

app.use(router);
app.use(ToastService);

app.mount('#app');
