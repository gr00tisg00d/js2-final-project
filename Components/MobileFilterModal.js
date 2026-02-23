import { storeUi, setActiveStoreSection } from "../Data/storeUi.js";
import FilterPanel from "./FilterPanel.js";

export default {
	name: "MobileFilterModal",
	components: {
		FilterPanel,
	},
	setup() {
		return {
			storeUi,
			setActiveStoreSection,
		};
	},
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
								<li class="nav-item">
									<button class="nav-link" :class="{ active: storeUi.activeSection === 'home' }" data-bs-dismiss="modal" type="button" @click="setActiveStoreSection('home')">Home</button>
								</li>
								<li class="nav-item">
									<button class="nav-link" :class="{ active: storeUi.activeSection === 'icons' }" data-bs-dismiss="modal" type="button" @click="setActiveStoreSection('icons')">Icons</button>
								</li>
								<li class="nav-item">
									<button class="nav-link" :class="{ active: storeUi.activeSection === 'themes' }" data-bs-dismiss="modal" type="button" @click="setActiveStoreSection('themes')">IDE Themes</button>
								</li>
								<li class="nav-item">
									<button class="nav-link" :class="{ active: storeUi.activeSection === 'banners' }" data-bs-dismiss="modal" type="button" @click="setActiveStoreSection('banners')">Banners</button>
								</li>
							</ul>
						</div>
						<div id="filterModalBody" class="d-flex flex-column gap-2">
							<div v-if="storeUi.activeSection !== 'home'">
								<filter-panel></filter-panel>
							</div>
							<div v-else class="small text-body-secondary">No filters on Home.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};
