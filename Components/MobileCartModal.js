export default {
    name: 'MobileCartModal',
    template: `
		<div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-scrollable">
				<div class="modal-content bg-dark text-light">
					<div class="modal-header border-secondary">
						<h5 class="modal-title" id="cartModalLabel">Cart</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<div class="d-flex align-items-center justify-content-between mb-2">
							<span class="fw-semibold">Cart</span>
							<button class="btn btn-sm btn-outline-primary" id="clearCartBtnModal" type="button">Clear</button>
						</div>
						<div id="cartModalBody" class="d-flex flex-column gap-2">
							<cart-panel></cart-panel>
						</div>
						<button class="btn btn-primary w-100 mt-3" type="button">Checkout</button>
					</div>
				</div>
			</div>
		</div>
	`
};
