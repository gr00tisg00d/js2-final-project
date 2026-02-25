import CartPanel from "./CartPanel.js";

export default {
	name: "CheckoutModal",
	components: {
		CartPanel,
	},
	template: `
		<div class="modal fade" id="checkoutModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-scrollable">
				<div class="modal-content app-surface">
					<div class="modal-header">
						<h5 class="modal-title" id="checkoutModalLabel">Checkout Preview</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
						<cart-panel></cart-panel>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Close</button>
					</div>
				</div>
			</div>
		</div>
	`,
};
