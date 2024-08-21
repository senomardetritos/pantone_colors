// Cria uma nova instância do store.
export default {
	namespaced: true,
	state: {
		colors: [],
	},
	getters: {
		totalCount(state) {
			return state.colors.reduce((accumulator, color) => accumulator + color.count, 0);
		},
		totalColors(state) {
			return state.colors.reduce((accumulator, color) => {
				return accumulator + (color.count > 0 ? 1 : 0);
			}, 0);
		},
		colorsCount(state) {
			return state.colors.length;
		},
	},
	mutations: {
		addColors(state, data) {
			state.colors = [...state.colors, ...data];
		},
		increment(state, color_id) {
			const color = state.colors.find((color) => color.id === color_id);
			color.count = color.count ? color.count + 1 : 1;
			state.count++;
		},
		decrement(state, color_id) {
			const color = state.colors.find((color) => color.id === color_id);
			color.count = color.count ? color.count - 1 : 0;
		},
	},
	actions: {
		async loadColors({ commit }, page) {
			const req = await fetch('https://reqres.in/api/unknown?page=' + page);
			const { data } = await req.json();
			data.map((d) => (d.count = 0));
			commit('addColors', data);
		},
	},
};
