import { storeUi, setActiveStoreSection } from "../Data/storeUi.js";
import FilterPanel from "./FilterPanel.js";
import CartPanel from "./CartPanel.js";
import StoreHomeSection from "./StoreHomeSection.js";
import StoreIconsSection from "./StoreIconsSection.js";
import StoreThemesSection from "./StoreThemesSection.js";
import StoreBannersSection from "./StoreBannersSection.js";

export default {
	name: "StorePage",
	components: {
		FilterPanel,
		CartPanel,
		StoreHomeSection,
		StoreIconsSection,
		StoreThemesSection,
		StoreBannersSection,
	},
	setup() {
		return {
			storeUi,
			setActiveStoreSection,
		};
	},
	template: `
        <main class="container flex-grow-1 py-3 d-flex flex-column overflow-hidden">
            <!-- Mobile: open filter/cart modals -->
            <div class="position-fixed top-50 end-0 translate-middle-y me-3 d-flex flex-column gap-2 d-lg-none z-3">
                <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#filterModal" aria-label="Open filters">
                    <i class="bi bi-funnel"></i>
                </button>
                <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#cartModal" aria-label="Open cart">
                    <i class="bi bi-cart"></i>
                </button>
            </div>

            <div class="row g-3 store-container ">
                <!-- Desktop sidebar -->
                <aside class="col-lg-3 d-none d-lg-block">
                    <div class="p-3 rounded app-surface mb-3">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <span class="fw-semibold">Filters</span>
                            <button class="btn btn-sm btn-outline-primary" type="button">Clear</button>
                        </div>
                        <ul class="nav nav-pills flex-column gap-1 mb-3">
                        <li class="nav-item">
                            <button class="nav-link" :class="{ active: storeUi.activeSection === 'home' }" type="button" @click="setActiveStoreSection('home')">Home</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" :class="{ active: storeUi.activeSection === 'icons' }" type="button" @click="setActiveStoreSection('icons')">Icons</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" :class="{ active: storeUi.activeSection === 'themes' }" type="button" @click="setActiveStoreSection('themes')">IDE Themes</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" :class="{ active: storeUi.activeSection === 'banners' }" type="button" @click="setActiveStoreSection('banners')">Banners</button>
                        </li>
                        </ul>
                        <div v-if="storeUi.activeSection !== 'home'">
                            <filter-panel></filter-panel>
                        </div>
                        <div v-else class="small text-body-secondary">No filters on Home.</div>
                    </div>

                    <div class="p-3 rounded app-surface">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <span class="fw-semibold">Cart</span>
                            <button class="btn btn-sm btn-outline-primary" id="clearCartBtn" type="button">Clear</button>
                        </div>
                        <cart-panel></cart-panel>
                        <button class="btn btn-primary w-100 mt-3" type="button">Checkout</button>
                    </div>
                </aside>

                <!-- Store grid -->
                <section class="col-12 col-lg-9 d-flex flex-column app-surface py-2">
					<div class="store-scroll">
                        <store-home-section v-if="storeUi.activeSection === 'home'"></store-home-section>
                        <store-icons-section v-else-if="storeUi.activeSection === 'icons'"></store-icons-section>
                        <store-themes-section v-else-if="storeUi.activeSection === 'themes'"></store-themes-section>
                        <store-banners-section v-else-if="storeUi.activeSection === 'banners'"></store-banners-section>
					</div>
                </section>
            </div>
        </main>
    `,
};
