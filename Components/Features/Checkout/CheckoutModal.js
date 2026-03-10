import CartPanel from "../Cart/CartPanel.js";

export default {
	name: "CheckoutModal",
	components: {
		CartPanel,
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
		walletBalance: {
			type: Number,
			required: true,
		},
		hasEnoughBalance: {
			type: Boolean,
			required: true,
		},
		balanceShortfall: {
			type: Number,
			required: true,
		},
		canSubmit: {
			type: Boolean,
			required: true,
		},
		lastOrder: {
			type: Object,
			default: null,
		},
	},
	emits: ["submit-order", "remove-item", "increment-item", "decrement-item"],
	template: `
		<div class="modal fade" id="checkoutModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-scrollable">
				<div class="modal-content app-surface">
					<div class="modal-header">
						<h5 class="modal-title" id="checkoutModalLabel">Checkout</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
						<div v-if="lastOrder" class="alert alert-success">
							Order placed for {{ lastOrder.items }} item(s) totaling <i class="bi bi-coin align-middle"></i> {{ lastOrder.total }}. Remaining balance: <i class="bi bi-coin align-middle"></i> {{ lastOrder.remainingBalance }}.
						</div>
						<div v-if="cartItems.length === 0" class="text-body-secondary small">
							Add items to your cart to complete checkout.
						</div>
						<div v-else class="d-flex flex-column gap-3">
							<div>
								<div class="fw-semibold mb-2">Order review</div>
								<cart-panel
									:items="cartItems"
									@remove-item="$emit('remove-item', $event)"
									@increment-item="$emit('increment-item', $event)"
									@decrement-item="$emit('decrement-item', $event)"
								></cart-panel>
							</div>
							<div class="p-3 rounded border border-secondary-subtle">
								<div class="d-flex align-items-center justify-content-between small mb-2">
									<span class="text-body-secondary">Items</span>
									<span>{{ cartCount }}</span>
								</div>
								<div class="d-flex align-items-center justify-content-between fw-semibold">
									<span>Total</span>
									<span><i class="bi bi-coin align-middle"></i> {{ checkoutTotal }}</span>
								</div>
								<div class="checkout-wallet-row mt-3 pt-3 border-top border-secondary-subtle">
									<div>
										<div class="fw-semibold">Wallet balance</div>
										<div class="small text-body-secondary">All shop purchases are paid from your user balance.</div>
									</div>
									<div class="fw-semibold"><i class="bi bi-coin align-middle"></i> {{ walletBalance }}</div>
								</div>
								<div v-if="!hasEnoughBalance" class="alert alert-warning small mt-3 mb-0">
									You need <i class="bi bi-coin align-middle"></i> {{ balanceShortfall }} more to place this order.
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Close</button>
						<button type="button" class="btn btn-primary" :disabled="!canSubmit" @click="$emit('submit-order')">Purchase</button>
					</div>
				</div>
			</div>
		</div>
	`,
};
