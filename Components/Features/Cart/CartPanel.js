export default {
	name: "CartPanel",
	props: {
		items: {
			type: Array,
			required: true,
		},
	},
	emits: ["remove-item", "increment-item", "decrement-item"],
	template: `
		<div class="cart-panel d-flex flex-column gap-3">
			<div v-if="items.length === 0" class="cart-empty-state">
				<div class="cart-empty-title">Your cart is empty</div>
				<div class="cart-empty-copy">Add something from the store to see your order summary here.</div>
			</div>
			<div v-else class="cart-list d-flex flex-column gap-2">
				<div v-for="item in items" :key="item.title" class="cart-item">
					<img :src="item.img" class="cart-item-image" />
					<div class="cart-item-content">
						<div class="cart-item-topline">
							<div class="cart-item-title text-truncate">{{ item.title }}</div>
							<span class="cart-qty-pill">Qty {{ item.qty }}</span>
						</div>
						<div class="cart-item-meta">
							<span><i class="bi bi-coin align-middle"></i> {{ item.cost * item.qty }}</span>
						</div>
						<div class="cart-item-actions">
							<div class="btn-group btn-group-sm cart-qty-controls">
								<button class="btn btn-outline-primary" type="button" @click="$emit('decrement-item', item)">-</button>
								<button class="btn btn-outline-primary" type="button" @click="$emit('increment-item', item)">+</button>
							</div>
							<button class="btn btn-sm btn-outline-primary cart-remove-btn" type="button" @click="$emit('remove-item', item)">
								<i class="bi bi-trash"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};
