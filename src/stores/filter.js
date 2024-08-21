// Cria uma nova instância do store.
export default {
	namespaced: true,
	state: {
		selected: 'TODAS',
	},
	getters: {
		getSelected(state) {
			return state.selected;
		},
	},
	mutations: {
		setSelected(state, value) {
			state.selected = value;
		},
	},
};
