export default {
	name: "MobileFilterModal",
	template: `
		<div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-scrollable">
				<div class="modal-content app-surface">
					<div class="modal-header">
						<h5 class="modal-title" id="filterModalLabel">Filters</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="d-flex align-items-center justify-content-between mb-2">
							<span class="fw-semibold">Filters</span>
							<button class="btn btn-sm btn-outline-primary" type="button">Clear</button>
						</div>
						<div class="mb-3">
							<ul class="nav nav-pills flex-column gap-1">
								<li class="nav-item"><button class="nav-link active" type="button">Icons</button></li>
								<li class="nav-item"><button class="nav-link" type="button">IDE Themes</button></li>
								<li class="nav-item"><button class="nav-link" type="button">Banners</button></li>
							</ul>
						</div>
						<div id="filterModalBody" class="d-flex flex-column gap-2">
							<filter-panel></filter-panel>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};
