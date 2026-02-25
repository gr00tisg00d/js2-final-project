import {
	cart,
	removeFromCart,
	incrementQty,
	decrementQty,
} from "../Data/cart.js";
export default {
	name: "CartPanel",
	setup() {
		return { cart, removeFromCart, incrementQty, decrementQty };
	},
	template: `
		<div class="d-flex flex-column gap-2">
			<div v-if="cart.items.length === 0" class="text-body-secondary small">No items yet.</div>
			<div v-else class="d-flex flex-column gap-2">
				<div v-for="item in cart.items" :key="item.title" class="d-flex align-items-center gap-2">
					<img :src="item.img" style="width: 40px; height: 40px; object-fit: cover;" class="rounded" />
					<div class="flex-grow-1">
						<div class="small fw-semibold text-truncate">{{ item.title }}</div>
						<div class="small text-body-secondary">
							Qty: {{ item.qty }} · <i class="bi bi-coin align-middle" style="font-size: 1em;"></i> {{ item.cost }}
						</div>
					</div>
					<div class="btn-group btn-group-sm">
						<button class="btn btn-outline-primary" type="button" @click="decrementQty(item)">-</button>
						<button class="btn btn-outline-primary" type="button" @click="incrementQty(item)">+</button>
					</div>
					<button class="btn btn-sm btn-outline-primary" type="button" @click="removeFromCart(item)">
						<i class="bi bi-trash"></i>
					</button>
				</div>
			</div>
		</div>
	`,
};
