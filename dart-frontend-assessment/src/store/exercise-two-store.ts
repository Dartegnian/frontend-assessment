import { createStore } from "vuex";

export const store = createStore({
	state: {
		activeSection: 0,
	},
	getters: {
		getSelection: (state) => state.activeSection,
	},
	mutations: {
		changeSelection: (state, newActiveSection: number) => {
			state.activeSection = newActiveSection;
		},
	},
});
