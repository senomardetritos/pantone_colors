import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

import colorStore from './stores/colors';
import filterStore from './stores/filter';

const store = createStore({
	modules: {
		colorStore,
		filterStore,
	},
});

const app = createApp(App);
app.use(store);
app.mount('#app');
