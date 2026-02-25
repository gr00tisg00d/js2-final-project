export default {
	name: "StoreHomeSection",
	template: `
		<div class="d-flex flex-column gap-3">
			<div class="p-3 rounded app-surface">
				<h2 class="h5 mb-1">Store Home</h2>
				<p class="text-body-secondary mb-0"></p>
			</div>

			<div class="row g-2">
				<div class="col-12 col-md-4">
					<div class="p-3 rounded app-surface h-100">
						<div class="fw-semibold">Today’s Deal</div>
						<div class="small text-body-secondary"></div>
					</div>
				</div>
				<div class="col-12 col-md-4">
					<div class="p-3 rounded app-surface h-100">
						<div class="fw-semibold">Promotion</div>
						<div class="small text-body-secondary"></div>
					</div>
				</div>
				<div class="col-12 col-md-4">
					<div class="p-3 rounded app-surface h-100">
						<div class="fw-semibold">Featured</div>
						<div class="small text-body-secondary"></div>
					</div>
				</div>
			</div>
		</div>
	`,
};
