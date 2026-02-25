import { filters } from "../Data/filters.js";

export default {
	name: "FilterPanel",
	setup() {
		return { filters };
	},
	template: `
		<div class="d-flex flex-column gap-2">
			<label class="small text-body-secondary">Search</label>
			<input
				class="form-control form-control-sm"
				type="text"
				placeholder="Search items..."
				v-model="filters.search"
			/>
			<!-- v-model binds the value to filters.search which is reactive. -->
			<div class="d-flex flex-column gap-2 mt-2">
				<span class="small text-body-secondary">Price filter</span>
				<div class="d-flex align-items-center justify-content-between small">
					<span>Up to \${{ filters.maxPrice }}</span>
					<span class="text-body-secondary">Range: $1-$100</span>
				</div>
				<input
					class="form-range"
					type="range"
					min="1"
					max="100"
					step="1"
					v-model.number="filters.maxPrice"
				/>
			</div>
		</div>
	`,
};
