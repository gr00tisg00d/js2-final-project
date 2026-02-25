import { reactive, ref } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";


// Cart items array
export const cart = reactive({
	items: [],
});

// Stores a selected item.
export const selectedItem = ref(null);

// Grabs the selected item.
export function selectItem(item) {
	selectedItem.value = item;
}

// Add to cart.
export function addToCart(item) {
	if (!item) return;

    // If item exists, increase quantity, else, return. (push).
	const existing = cart.items.find((x) => x.title === item.title);
	if (existing) {
		existing.qty = existing.qty + 1;
		return;
	}

    // Pushing the item with a new property (qty)
	cart.items.push({
		title: item.title,
		img: item.img,
		cost: item.cost,
		qty: 1,
	});
}

// Clear Cart.
export function clearCart() {
    // Starts at 0 and removes the entire array.
	cart.items.splice(0, cart.items.length);
}

// Remove from  cart.
export function removeFromCart(item) {

    // If the item exists, remove it.
	const index = cart.items.indexOf(item);
	if (index === -1) return;
	cart.items.splice(index, 1);
}

// Increment quantity
export function incrementQty(item) {
	if (!item) return;
	item.qty = item.qty + 1;
}

// Decrement quantity
export function decrementQty(item) {
	if (!item) return;
	item.qty = item.qty - 1;
	if (item.qty <= 0) removeFromCart(item);
}
