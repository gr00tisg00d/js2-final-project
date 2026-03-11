import CartSummarySection from "./CartSummarySection.js";

export default {
	name: "MobileCartModal",
	components: {
		CartSummarySection,
	},
	props: {
		cartItems: {
			type: Array,
			required: true,
		},
		cartCount: {
			type: Number,
			required: true,
		},
		checkoutTotal: {
			type: Number,
			required: true,
		},
	},
	emits: ["clear-cart", "remove-item", "increment-item", "decrement-item"],
	template: `
		<div class="modal fade" id="cartModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-scrollable">
				<div class="modal-content app-surface">
					<div class="modal-header">
						<h5 class="modal-title" id="cartModalLabel">Cart</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
							<div class="panel-header panel-header-split mb-3">
								<div>
									<span class="panel-eyebrow">Basket</span>
									<span class="panel-title">Cart ({{ cartCount }})</span>
								</div>
							<button class="btn btn-sm btn-outline-primary" type="button" @click="$emit('clear-cart')">Clear</button>
						</div>
						<div id="cartModalBody" class="d-flex flex-column gap-2">
							<cart-summary-section
								:cart-items="cartItems"
								:checkout-total="checkoutTotal"
								:dismiss-modal-on-checkout="true"
								@remove-item="$emit('remove-item', $event)"
								@increment-item="$emit('increment-item', $event)"
								@decrement-item="$emit('decrement-item', $event)"
							></cart-summary-section>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};
