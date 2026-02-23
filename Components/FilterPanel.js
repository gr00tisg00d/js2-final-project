export default {
	name: "FilterPanel",
	template: `
		<div class="d-flex flex-column gap-2">
			<label class="small text-body-secondary">Search</label>
			<input class="form-control form-control-sm" type="text" placeholder="Search items...">
			<div class="d-flex flex-column gap-1 mt-2">
				<span class="small text-body-secondary">Price range</span>
				<label class="d-flex align-items-center gap-2">
					<input class="form-check-input" type="checkbox">
					<span>$0-$50</span>
				</label>
				<label class="d-flex align-items-center gap-2">
					<input class="form-check-input" type="checkbox">
					<span>$51-$70</span>
				</label>
				<label class="d-flex align-items-center gap-2">
					<input class="form-check-input" type="checkbox">
					<span>$71-$90</span>
				</label>
				<label class="d-flex align-items-center gap-2">
					<input class="form-check-input" type="checkbox">
					<span>$91-$100</span>
				</label>
			</div>
		</div>
	`,
};
