import { computed } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import Icons from "../Data/icons.js";
import { filters } from "../Data/filters.js";
import { selectItem } from "../Data/cart.js";

export default {
	name: "StoreIconsSection",
	setup() {
		// Filter functionality.
		const filteredIcons = computed(() => {
			const search = filters.search.trim().toLowerCase();
			const maxPrice = filters.maxPrice;

			// Filter the icons array.
			return Icons.filter((item) => {
				const matchesPrice = item.cost <= maxPrice; // Price Filter

				const matchesSearch = item.title.toLowerCase().includes(search); // Search Filter

				return matchesPrice && matchesSearch;
			});
		});

		return {
			filters,
			filteredIcons,
			selectItem,
		};
	},
	template: `
		<div>
			<div class="d-flex align-items-baseline justify-content-between mb-2">
				<h2 class="h5 mb-0">Icons</h2>
				<span class="small text-body-secondary">{{ filteredIcons.length }} items</span>
			</div>

			<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-2">
				<div class="col" v-for="item in filteredIcons" :key="item.title">
					<div class="card app-surface h-100">
						<img class="card-img-top" :src="item.img">
						<div class="card-body p-2">
							<div class="small fw-semibold text-truncate">{{ item.title }}</div>
							<div class="small text-body-secondary">
								<i class="bi bi-coin align-middle" style="font-size: 1em;"></i> {{ item.cost }}
							</div>
						</div>
						<div class="card-footer border-0 bg-transparent p-2 pt-0">
							<button class="btn btn-sm btn-primary w-100" type="button" @click="selectItem(item)" data-bs-toggle="modal" data-bs-target="#addToCartModal">Add</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};
