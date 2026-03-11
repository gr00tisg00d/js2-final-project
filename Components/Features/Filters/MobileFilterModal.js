import FilterPanel from "./FilterPanel.js";
import StoreSectionNav from "../Store/StoreSectionNav.js";

export default {
	name: "MobileFilterModal",
	components: {
		FilterPanel,
		StoreSectionNav,
	},
	props: {
		activeSection: {
			type: String,
			required: true,
		},
		showFilters: {
			type: Boolean,
			required: true,
		},
		filters: {
			type: Object,
			required: true,
		},
		priceCap: {
			type: Number,
			required: true,
		},
	},
	emits: [
		"select-section",
		"update-search",
		"update-min-price",
		"update-max-price",
	],
	template: `
		<div class="modal fade" id="filterModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-scrollable">
				<div class="modal-content app-surface">
					<div class="modal-header">
						<h5 class="modal-title" id="filterModalLabel">Filters</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
							<div class="panel-header mb-3">
								<span class="panel-eyebrow">Browse</span>
								<span class="panel-title">Filters</span>
							</div>
						<div class="mb-3">
							<store-section-nav
								:active-section="activeSection"
								:dismiss-modal="true"
								@select-section="$emit('select-section', $event)"
							></store-section-nav>
						</div>
						<div id="filterModalBody" class="d-flex flex-column gap-2">
							<div v-if="showFilters">
								<filter-panel
									:filters="filters"
									:price-cap="priceCap"
									@update-search="$emit('update-search', $event)"
									@update-min-price="$emit('update-min-price', $event)"
									@update-max-price="$emit('update-max-price', $event)"
								></filter-panel>
							</div>
							<div v-else class="small text-body-secondary">No filters on Home.</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};
