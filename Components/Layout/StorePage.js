import FilterPanel from "../Features/Filters/FilterPanel.js";
import CartPanel from "../Features/Cart/CartPanel.js";
import StoreHomeSection from "../Features/Store/StoreHomeSection.js";
import StoreIconsSection from "../Features/Store/StoreIconsSection.js";
import StoreThemesSection from "../Features/Store/StoreThemesSection.js";
import StoreBannersSection from "../Features/Store/StoreBannersSection.js";
import MobileFilterModal from "../Features/Filters/MobileFilterModal.js";
import MobileCartModal from "../Features/Cart/MobileCartModal.js";
import CheckoutModal from "../Features/Checkout/CheckoutModal.js";

export default {
	name: "StorePage",
	components: {
		FilterPanel,
		CartPanel,
		StoreHomeSection,
		StoreIconsSection,
		StoreThemesSection,
		StoreBannersSection,
		MobileFilterModal,
		MobileCartModal,
		CheckoutModal,
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
		userProfile: {
			type: Object,
			required: true,
		},
	},
	data() {
		const initialPriceCap = Math.max(...this.items.map((item) => item.cost));

		return {
			activeSection: "icons",
			filters: {
				search: "",
				minPrice: 1,
				maxPrice: initialPriceCap,
			},
			cartItems: [],
			lastOrder: null,
		};
	},
	computed: {
		priceCap() {
			return Math.max(...this.items.map((item) => item.cost));
		},
		filteredIcons() {
			const search = this.filters.search.trim().toLowerCase();

			return this.items.filter((item) => {
				const matchesSearch =
					search.length === 0 || item.title.toLowerCase().includes(search);
				const matchesPrice =
					item.cost >= this.filters.minPrice &&
					item.cost <= this.filters.maxPrice;

				return matchesSearch && matchesPrice;
			});
		},
		featuredItem() {
			return (
				[...this.items].sort((left, right) => right.cost - left.cost)[0] ?? null
			);
		},
		cartCount() {
			return this.cartItems.reduce((count, item) => count + item.qty, 0);
		},
		cartSubtotal() {
			return this.cartItems.reduce(
				(total, item) => total + item.cost * item.qty,
				0,
			);
		},
		checkoutTotal() {
			return this.cartSubtotal;
		},
		hasEnoughBalance() {
			return this.userProfile.balance >= this.checkoutTotal;
		},
		balanceShortfall() {
			return Math.max(0, this.checkoutTotal - this.userProfile.balance);
		},
		canSubmitCheckout() {
			return this.cartItems.length > 0 && this.hasEnoughBalance;
		},
	},
	methods: {
		setActiveSection(section) {
			this.activeSection = section;
		},
		updateSearch(value) {
			this.filters.search = value;
		},
		updateMinPrice(value) {
			this.filters.minPrice = Math.min(Number(value), this.filters.maxPrice);
		},
		updateMaxPrice(value) {
			this.filters.maxPrice = Math.max(Number(value), this.filters.minPrice);
		},
		addItemToCart(item) {
			if (!item) {
				return;
			}

			const existingItem = this.cartItems.find(
				(cartItem) => cartItem.title === item.title,
			);

			if (existingItem) {
				existingItem.qty += 1;
				return;
			}

			this.cartItems.push({
				title: item.title,
				img: item.img,
				cost: item.cost,
				itemType: "icon",
				description: item.description,
				perk: item.perk,
				bestFor: item.bestFor,
				qty: 1,
			});
		},
		clearCart() {
			this.cartItems.splice(0, this.cartItems.length);
		},
		removeFromCart(item) {
			const index = this.cartItems.indexOf(item);

			if (index >= 0) {
				this.cartItems.splice(index, 1);
			}
		},
		incrementQty(item) {
			if (item) {
				item.qty += 1;
			}
		},
		decrementQty(item) {
			if (!item) {
				return;
			}

			item.qty -= 1;

			if (item.qty <= 0) {
				this.removeFromCart(item);
			}
		},
		submitCheckout() {
			if (!this.canSubmitCheckout) {
				return;
			}

			this.userProfile.balance -= this.checkoutTotal;

			this.cartItems.forEach((item) => {
				const inventoryItem = this.userProfile.inventory.find(
					(entry) => entry.title === item.title,
				);

				if (inventoryItem) {
					inventoryItem.qty += item.qty;
					return;
				}

				this.userProfile.inventory.push({
					title: item.title,
					img: item.img,
					itemType: item.itemType,
					qty: item.qty,
				});
			});

			if (!this.userProfile.activeIcon) {
				const firstPurchasedIcon = this.cartItems.find(
					(item) => item.itemType === "icon",
				);

				if (firstPurchasedIcon) {
					this.userProfile.activeIcon = firstPurchasedIcon.title;
				}
			}

			this.lastOrder = {
				items: this.cartCount,
				total: this.checkoutTotal,
				remainingBalance: this.userProfile.balance,
			};

			this.clearCart();
		},
	},
	template: `
		<main class="container flex-grow-1 py-3 d-flex flex-column overflow-hidden store-page-main">

            <!-- Mobile: open filter/cart modals -->
            <div class="position-fixed top-50 end-0 translate-middle-y me-3 d-flex flex-column gap-2 d-lg-none z-3">
                <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#filterModal">
                    <i class="bi bi-funnel"></i>
                </button>
                <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#cartModal">
                    <i class="bi bi-cart"></i>
                    <span v-if="cartCount > 0" class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{{ cartCount }}</span>
                </button>
            </div>

            <div class="row g-3 store-container ">

                <!-- Desktop sidebar -->
                <aside class="col-lg-3 d-none d-lg-flex flex-column store-sidebar-column">
					<div class="p-3 rounded app-surface store-sidebar-panel store-filter-sidebar mb-3">
						<div class="panel-header mb-3">
							<span class="panel-eyebrow">Browse</span>
							<span class="panel-title">Filters</span>
						</div>
						<div class="sidebar-nav-grid mb-3">
							<button class="sidebar-nav-button" :class="{ active: activeSection === 'home' }" type="button" @click="setActiveSection('home')">Home</button>
							<button class="sidebar-nav-button" :class="{ active: activeSection === 'icons' }" type="button" @click="setActiveSection('icons')">Icons</button>
							<button class="sidebar-nav-button" :class="{ active: activeSection === 'themes' }" type="button" @click="setActiveSection('themes')">IDE Themes</button>
							<button class="sidebar-nav-button" :class="{ active: activeSection === 'banners' }" type="button" @click="setActiveSection('banners')">Banners</button>
						</div>
						<!-- Filters -->
						<div v-if="activeSection !== 'home'" class="sidebar-filter-slot">
							<filter-panel
								:filters="filters"
								:price-cap="priceCap"
								@update-search="updateSearch"
								@update-min-price="updateMinPrice"
								@update-max-price="updateMaxPrice"
							></filter-panel>
                        </div>
                        <div v-else class="small text-body-secondary sidebar-empty-state">No filters on Home.</div>
                    </div>

                    <!-- Cart -->
					<div class="p-3 rounded app-surface store-sidebar-panel cart-sidebar-panel">
						<div class="panel-header panel-header-split mb-3">
							<div>
								<span class="panel-eyebrow">Basket</span>
								<span class="panel-title">Cart</span>
							</div>
							<button class="btn btn-sm btn-outline-primary" type="button" @click="clearCart">Clear</button>
                        </div>
                        <cart-panel
							:items="cartItems"
							@remove-item="removeFromCart"
							@increment-item="incrementQty"
							@decrement-item="decrementQty"
						></cart-panel>
						<div class="cart-total-row mt-3 small">
							<span class="text-body-secondary">Order total</span>
							<span class="fw-semibold"><i class="bi bi-coin align-middle"></i> {{ checkoutTotal }}</span>
						</div>
						<button class="btn btn-primary w-100 mt-3" type="button" data-bs-toggle="modal" data-bs-target="#checkoutModal" :disabled="cartItems.length === 0">Checkout</button>
                    </div>
                </aside>

                <!-- Store grid -->
				<section class="col-12 col-lg-9 d-flex flex-column app-surface py-2 store-content-panel">
					<div class="store-scroll">
						<store-home-section
							v-if="activeSection === 'home'"
							:featured-item="featuredItem"
							:icon-count="items.length"
							:theme-count="3"
							:banner-count="3"
							:cart-count="cartCount"
							@navigate-section="setActiveSection"
							@add-item="addItemToCart"
						></store-home-section>
						<store-icons-section
							v-else-if="activeSection === 'icons'"
							:items="filteredIcons"
							@add-item="addItemToCart"
						></store-icons-section>
                        <store-themes-section v-else-if="activeSection === 'themes'"></store-themes-section>
                        <store-banners-section v-else-if="activeSection === 'banners'"></store-banners-section>
					</div>
                </section>
            </div>

			<mobile-filter-modal
				:active-section="activeSection"
				:filters="filters"
				:price-cap="priceCap"
				@select-section="setActiveSection"
				@update-search="updateSearch"
				@update-min-price="updateMinPrice"
				@update-max-price="updateMaxPrice"
			></mobile-filter-modal>
			<mobile-cart-modal
				:cart-items="cartItems"
				:cart-count="cartCount"
				:checkout-total="checkoutTotal"
				@clear-cart="clearCart"
				@remove-item="removeFromCart"
				@increment-item="incrementQty"
				@decrement-item="decrementQty"
			></mobile-cart-modal>
			<checkout-modal
				:cart-items="cartItems"
				:cart-count="cartCount"
				:checkout-total="checkoutTotal"
				:wallet-balance="userProfile.balance"
				:has-enough-balance="hasEnoughBalance"
				:balance-shortfall="balanceShortfall"
				:can-submit="canSubmitCheckout"
				:last-order="lastOrder"
				@submit-order="submitCheckout"
				@remove-item="removeFromCart"
				@increment-item="incrementQty"
				@decrement-item="decrementQty"
			></checkout-modal>
        </main>
    `,
};
