export default {
	name: "StoreIconsSection",
	data() {
		return {
			hoveredItem: null,
			previewStyle: {},
			previewPlacement: "above",
		};
	},
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	emits: ["add-item"],
	methods: {
		updatePreviewPosition(item, event) {
			const card = event.currentTarget;
			const rect = card.getBoundingClientRect();
			const previewWidth = Math.min(288, window.innerWidth - 32);
			const previewHeight = 220;
			const headerBottom =
				document.querySelector("header")?.getBoundingClientRect().bottom ?? 0;
			const gap = 18;
			const pointerX = event.clientX ?? rect.left + rect.width / 2;
			const pointerY = event.clientY ?? rect.top + rect.height / 2;
			const left = Math.max(
				16,
				Math.min(pointerX + gap, window.innerWidth - previewWidth - 16),
			);
			const canPlaceAbove = pointerY - previewHeight - gap > headerBottom + 8;
			const top = canPlaceAbove
				? pointerY - gap
				: Math.min(pointerY + gap, window.innerHeight - previewHeight - 16);

			this.hoveredItem = item;
			this.previewPlacement = canPlaceAbove ? "above" : "below";
			this.previewStyle = {
				width: `${previewWidth}px`,
				left: `${left}px`,
				top: `${top}px`,
			};
		},
		hidePreview() {
			this.hoveredItem = null;
		},
	},
	template: `
		<div class="store-catalog d-flex flex-column gap-3">

			<!-- Icons Header -->
			<div class="store-catalog-hero app-surface rounded p-3 p-lg-4">
				<div class="store-catalog-header">
					<div>
						<div class="store-catalog-eyebrow">Storefront</div>
						<h2 class="store-catalog-title mb-1">Icon Library</h2>
						<p class="store-catalog-copy mb-0">Curated identity pieces for portfolios, dashboards, and profile customization.</p>
					</div>
					<div class="store-catalog-pill">
						<span class="store-catalog-pill-value">{{ items.length }}</span>
						<span class="store-catalog-pill-label">available</span>
					</div>
				</div>
			</div>

			<!-- Empty List Placeholder -->
			<div v-if="items.length === 0" class="store-empty-state app-surface rounded p-4">
				<div class="store-empty-title">No matching icons</div>
				<div class="store-empty-copy">Try widening the search or adjusting the price sliders to see more items.</div>
			</div>


			<!-- Display Icon Cards -->
			<div v-else class="row row-cols-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-2 g-lg-3">

				<div class="col" v-for="item in items" :key="item.title">

					<div
						class="card app-surface h-100 store-item-card"
						@mouseenter="updatePreviewPosition(item, $event)"
						@mousemove="updatePreviewPosition(item, $event)"
						@mouseleave="hidePreview"
						@focusin="updatePreviewPosition(item, $event)"
						@focusout="hidePreview"
					>
						<div class="store-item-media-wrap">
							<img class="card-img-top store-item-image" :src="item.img" :alt="item.title">
							<div class="store-item-price-badge"><i class="bi bi-coin align-middle"></i> {{ item.cost }}</div>
						</div>
						<div class="card-body store-item-body">
							<div class="store-item-name text-truncate">{{ item.title }}</div>
							<p class="store-item-summary">{{ item.shortDescription }}</p>
						</div>
						<div class="card-footer border-0 bg-transparent store-item-footer">
							<button class="btn btn-sm btn-primary w-100 store-item-button" type="button" @click="$emit('add-item', item)">Add to cart</button>
						</div>
					</div>

				</div>
			</div>


			<!-- Moves the icon preview modal to the body element. This is because of the navbar overlaying the preview. -->
			<teleport to="body">
				<div
					v-if="hoveredItem"
					class="icon-hover-modal is-visible"
					:class="previewPlacement === 'below' ? 'is-below' : 'is-above'"
					:style="previewStyle"
				>
					<p class="small mb-0">{{ hoveredItem.shortDescription }}</p>
				</div>
			</teleport>
		</div>
	`,
};
