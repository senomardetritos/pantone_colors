// Cria uma nova instância do store.
export default {
	namespaced: true,
	store: {
		selected: 'TODAS',
	},
	getters: {
		getSelected(state) {
			return state.selected;
		},
	},
	actions: {
		setSelected(state, value) {
			state.selected = value;
		},
	},
};
