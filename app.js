import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Navbar from "./Components/Navbar.js";
import FilterPanel from "./Components/FilterModal.js";
import CartPanel from "./Components/CartModal.js";
import MobileFilterModal from "./Components/MobileFilterModal.js";
import MobileCartModal from "./Components/MobileCartModal.js";
import MobileAddToCartModal from "./Components/MobileAddToCartModal.js";

createApp({
    components: {
        Navbar,
        FilterPanel,
        CartPanel,
        MobileFilterModal,
        MobileCartModal,
        MobileAddToCartModal,
    }
}).mount('#app');