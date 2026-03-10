import { reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export const userProfile = reactive({
	balance: 100,
	level: 1,
	inventory: [],
	activeIcon: "",
	activeBanner: "",
	activeIDETheme: "",
});
