import { createApp } from 'vue';
import App from './App.vue';

import colorStore from './stores/colors';

const app = createApp(App);
app.use(colorStore);
app.mount('#app');
