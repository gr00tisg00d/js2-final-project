import CartPanel from "./CartPanel.js";
import { clearCart } from "../Data/cart.js";

export default {
	name: "MobileCartModal",
	components: {
		CartPanel,
	},
	setup() {
		return { clearCart };
	},
	template: `
		<div class="modal fade" id="cartModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-scrollable">
				<div class="modal-content app-surface">
					<div class="modal-header">
						<h5 class="modal-title" id="cartModalLabel">Cart</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
						<div class="d-flex align-items-center justify-content-between mb-2">
							<span class="fw-semibold">Cart</span>
							<button class="btn btn-sm btn-outline-primary" type="button" @click="clearCart">Clear</button>
						</div>
						<div id="cartModalBody" class="d-flex flex-column gap-2">
							<cart-panel></cart-panel>
						</div>
						<button class="btn btn-primary w-100 mt-3" type="button" data-bs-toggle="modal" data-bs-target="#checkoutModal" data-bs-dismiss="modal">Checkout</button>
					</div>
				</div>
			</div>
		</div>
	`,
};
