export default {
	name: "FilterPanel",
	data() {
		return {
			isCollapsed: false,
		};
	},
	props: {
		filters: {
			type: Object,
			required: true,
		},
		priceCap: {
			type: Number,
			required: true,
		},
	},
	emits: ["update-search", "update-min-price", "update-max-price"],
	template: `
		<div class="filter-panel d-flex flex-column gap-3">
			<section class="filter-group">
				<div class="filter-group-header">
					<div>
						<div class="filter-group-title">Search catalog</div>
						<div class="filter-group-caption">Find icons, banners, and themes faster.</div>
					</div>
					<span class="filter-badge">{{ filters.search ? 'Active' : 'All items' }}</span>
				</div>
				<label class="filter-label">Keywords</label>
				<input
					class="form-control form-control-sm"
					type="text"
					placeholder="Search items..."
					:value="filters.search"
					@input="$emit('update-search', $event.target.value)"
				/>
			</section>
			<button
				class="filter-toggle-button"
				type="button"
				@click="isCollapsed = !isCollapsed"
				:aria-expanded="String(!isCollapsed)"
			>
				<span>{{ isCollapsed ? 'Show price range' : 'Hide price range' }}</span>
				<i class="bi" :class="isCollapsed ? 'bi-chevron-down' : 'bi-chevron-up'"></i>
			</button>
			<div class="filter-panel-body" :class="{ collapsed: isCollapsed }">
				<div class="filter-panel-body-inner d-flex flex-column gap-3">
					<section class="filter-group">
						<div class="filter-group-header">
							<div>
								<div class="filter-group-title">Price range</div>
								<div class="filter-group-caption">Refine results to match your budget.</div>
							</div>
							<span class="filter-badge">\${{ filters.minPrice }} - \${{ filters.maxPrice }}</span>
						</div>
						<div class="filter-range-meta small">
							<span>Selected: \${{ filters.minPrice }} to \${{ filters.maxPrice }}</span>
							<span class="text-body-secondary">Range: \$1 to \${{ priceCap }}</span>
						</div>
						<div class="filter-slider-row">
							<div class="filter-slider-labels">
								<label class="filter-label">Minimum price</label>
								<span class="filter-value">\${{ filters.minPrice }}</span>
							</div>
							<input
								class="form-range"
								type="range"
								min="1"
								:max="priceCap"
								step="1"
								:value="filters.minPrice"
								@input="$emit('update-min-price', Number($event.target.value))"
							/>
						</div>
						<div class="filter-slider-row">
							<div class="filter-slider-labels">
								<label class="filter-label">Maximum price</label>
								<span class="filter-value">\${{ filters.maxPrice }}</span>
							</div>
							<input
								class="form-range"
								type="range"
								min="1"
								:max="priceCap"
								step="1"
								:value="filters.maxPrice"
								@input="$emit('update-max-price', Number($event.target.value))"
							/>
						</div>
					</section>
				</div>
			</div>
		</div>
	`,
};
