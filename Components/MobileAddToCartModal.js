import { addToCart, selectedItem } from "../Data/cart.js";

export default {
	name: "MobileAddToCartModal",
	setup() {
		const confirmAddToCart = () => {
			addToCart(selectedItem.value);
		};

		return {
			selectedItem,
			confirmAddToCart,
		};
	},
	template: `
		<div class="modal fade" id="addToCartModal" tabindex="-1">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content app-surface">
					<div class="modal-header">
						<h5 class="modal-title" id="addToCartModalLabel">Add to cart?</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
					</div>
					<div class="modal-body">
						<div v-if="selectedItem" class="d-flex gap-3 align-items-center">
							<img :src="selectedItem.img" style="width: 72px; height: 72px; object-fit: cover;" class="rounded" />
							<div class="flex-grow-1">
								<div class="fw-semibold">{{ selectedItem.title }}</div>
								<div class="small text-body-secondary">
									<i class="bi bi-coin align-middle" style="font-size: 1em;"></i> {{ selectedItem.cost }}
								</div>
							</div>
						</div>
						<div v-else class="text-body-secondary small">No item selected.</div>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-outline-primary" data-bs-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-primary" :disabled="!selectedItem" @click="confirmAddToCart" data-bs-dismiss="modal">Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	`,
};
