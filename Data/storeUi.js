import { reactive } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

export const storeUi = reactive({
	activeSection: "icons", // "home" | "icons" | "themes" | "banners"
});

export function setActiveStoreSection(section) {
	storeUi.activeSection = section;
}
