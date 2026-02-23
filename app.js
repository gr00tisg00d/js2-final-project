import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Navbar from "./Components/Navbar.js";
import FilterPanel from "./Components/FilterPanel.js";
import CartPanel from "./Components/CartPanel.js";
import StorePage from "./Components/StorePage.js";
import AppFooter from "./Components/AppFooter.js";
import MobileFilterModal from "./Components/MobileFilterModal.js";
import MobileCartModal from "./Components/MobileCartModal.js";
import MobileAddToCartModal from "./Components/MobileAddToCartModal.js";

createApp({
	components: {
		Navbar,
		FilterPanel,
		CartPanel,
		StorePage,
		AppFooter,
		MobileFilterModal,
		MobileCartModal,
		MobileAddToCartModal,
	},
}).mount("#app");
