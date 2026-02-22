export default {
    name: 'MobileFilterModal',
    template: `
		<div class="modal fade" id="filterModal" tabindex="-1" aria-labelledby="filterModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-scrollable">
				<div class="modal-content bg-dark text-light">
					<div class="modal-header border-secondary">
						<h5 class="modal-title" id="filterModalLabel">Filters</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="d-flex align-items-center justify-content-between mb-2">
							<span class="fw-semibold">Filters</span>
							<button class="btn btn-sm btn-outline-primary filter-clear" type="button">Clear</button>
						</div>
						<div class="mb-3">
							<ul class="nav flex-column gap-1 filter-menu">
								<li class="nav-item">
									<button class="nav-link active px-2 w-100" type="button" aria-current="true">Icons</button>
								</li>
								<li class="nav-item">
									<button class="nav-link px-2 w-100" type="button">IDE Themes</button>
								</li>
								<li class="nav-item">
									<button class="nav-link px-2 w-100" type="button">Banners</button>
								</li>
							</ul>
						</div>
						<div id="filterModalBody" class="d-flex flex-column gap-2">
							<filter-panel></filter-panel>
						</div>
					</div>
				</div>
			</div>
		</div>
	`
};
