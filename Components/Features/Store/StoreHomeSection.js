export default {
	name: "StoreHomeSection",
	props: {
		featuredItem: {
			type: Object,
			default: null,
		},
		iconCount: {
			type: Number,
			required: true,
		},
		themeCount: {
			type: Number,
			required: true,
		},
		bannerCount: {
			type: Number,
			required: true,
		},
		cartCount: {
			type: Number,
			required: true,
		},
	},
	emits: ["navigate-section", "add-item"],
	template: `
		<div class="d-flex flex-column gap-3">
			<div class="p-3 rounded app-surface">
				<h2 class="h5 mb-1">Store Home</h2>
				<p class="text-body-secondary mb-0">Use the quick links below to jump between store areas, or grab the featured unlock without leaving the home panel.</p>
			</div>

			<div class="row g-2">
				<div class="col-12 col-md-4">
					<div class="p-3 rounded app-surface h-100 d-flex flex-column gap-2">
						<div class="fw-semibold">Icon Library</div>
						<div class="small text-body-secondary">Browse {{ iconCount }} icon cosmetics and add them directly to your cart.</div>
						<button class="btn btn-sm btn-outline-primary mt-auto" type="button" @click="$emit('navigate-section', 'icons')">Browse icons</button>
					</div>
				</div>
				<div class="col-12 col-md-4">
					<div class="p-3 rounded app-surface h-100 d-flex flex-column gap-2">
						<div class="fw-semibold">Workbench Themes</div>
						<div class="small text-body-secondary">Preview {{ themeCount }} built-in color palettes and apply one inside the theme section.</div>
						<button class="btn btn-sm btn-outline-primary mt-auto" type="button" @click="$emit('navigate-section', 'themes')">Preview themes</button>
					</div>
				</div>
				<div class="col-12 col-md-4">
					<div class="p-3 rounded app-surface h-100 d-flex flex-column gap-2">
						<div class="fw-semibold">Profile Banners</div>
						<div class="small text-body-secondary">Try {{ bannerCount }} banner looks and keep track of {{ cartCount }} item(s) currently in your cart.</div>
						<button class="btn btn-sm btn-outline-primary mt-auto" type="button" @click="$emit('navigate-section', 'banners')">Open banners</button>
					</div>
				</div>
			</div>

			<div v-if="featuredItem" class="p-3 rounded app-surface d-flex flex-column flex-lg-row gap-3 align-items-lg-center">
				<img :src="featuredItem.img" :alt="featuredItem.title" class="rounded store-home-featured-image" />
				<div class="flex-grow-1">
					<div class="small text-uppercase text-body-secondary">Featured unlock</div>
					<div class="h5 mb-1">{{ featuredItem.title }}</div>
					<div class="small text-body-secondary mb-2">{{ featuredItem.description }}</div>
					<div class="small text-body-secondary">Best for: {{ featuredItem.bestFor }}</div>
				</div>
				<div class="d-flex flex-column gap-2 align-items-lg-end">
					<div class="fw-semibold"><i class="bi bi-coin align-middle"></i> {{ featuredItem.cost }}</div>
					<button class="btn btn-primary" type="button" @click="$emit('add-item', featuredItem)">Add featured item</button>
				</div>
			</div>
		</div>
	`,
};
