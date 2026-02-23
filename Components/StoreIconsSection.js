import Icons from "../Data/icons.js";

function normalizeAssetPath(path) {
	if (typeof path !== "string") return path;
	// Your data currently uses `/src/Images/...` but this project serves from the repo root.
	if (path.startsWith("/src/")) return path.replace("/src", "");
	return path;
}

export default {
	name: "StoreIconsSection",
	setup() {
		return {
			icons: Icons,
			normalizeAssetPath,
		};
	},
	template: `
		<div>
			<div class="d-flex align-items-baseline justify-content-between mb-2">
				<h2 class="h5 mb-0">Icons</h2>
				<span class="small text-body-secondary">{{ icons.length }} items</span>
			</div>

			<div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-2">
				<div class="col" v-for="item in icons" :key="item.title">
					<div class="card app-surface h-100">
						<img class="card-img-top" :src="normalizeAssetPath(item.img)" :alt="item.title">
						<div class="card-body p-2">
							<div class="small fw-semibold text-truncate">{{ item.title }}</div>
							<div class="small text-body-secondary">{{ item.cost }} coins</div>
						</div>
						<div class="card-footer border-0 bg-transparent p-2 pt-0">
							<button class="btn btn-sm btn-primary w-100" type="button" data-bs-toggle="modal" data-bs-target="#addToCartModal">Add</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};
