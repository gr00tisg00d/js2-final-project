import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Navbar from "./Components/Layout/Navbar.js";
import StorePage from "./Components/Layout/StorePage.js";
import AppFooter from "./Components/Layout/AppFooter.js";
import icons from "./Data/icons.js";
import { userProfile } from "./Data/userProperties.js";

createApp({
	components: {
		Navbar,
		StorePage,
		AppFooter,
	},
	data() {
		return {
			icons,
			userProfile,
		};
	},
	template: `
		<navbar :user-profile="userProfile"></navbar>
		<store-page :items="icons" :user-profile="userProfile"></store-page>
		<app-footer></app-footer>
	`,
}).mount("#app");
