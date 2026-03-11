import CartPanel from "./CartPanel.js";

export default {
	name: "CartSummarySection",
	components: {
		CartPanel,
	},
	props: {
		cartItems: {
			type: Array,
			required: true,
		},
		checkoutTotal: {
			type: Number,
			required: true,
		},
		dismissModalOnCheckout: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["remove-item", "increment-item", "decrement-item"],
	template: `
		<div class="d-flex flex-column gap-2">
			<cart-panel
				:items="cartItems"
				@remove-item="$emit('remove-item', $event)"
				@increment-item="$emit('increment-item', $event)"
				@decrement-item="$emit('decrement-item', $event)"
			></cart-panel>
			<div class="cart-total-row mt-3 small">
				<span class="text-body-secondary">Order total</span>
				<span class="fw-semibold"><i class="bi bi-coin align-middle"></i> {{ checkoutTotal }}</span>
			</div>
			<button
				class="btn btn-primary w-100 mt-3"
				type="button"
				data-bs-toggle="modal"
				data-bs-target="#checkoutModal"
				:data-bs-dismiss="dismissModalOnCheckout ? 'modal' : null"
				:disabled="cartItems.length === 0"
			>
				Checkout
			</button>
		</div>
	`,
};
