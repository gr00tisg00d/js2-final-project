export default {
    name: 'MobileAddToCartModal',
    template: `
		<div class="modal fade" id="addToCartModal" tabindex="-1" aria-labelledby="addToCartModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-dialog-centered">
				<div class="modal-content bg-dark text-light">
					<div class="modal-header border-secondary">
						<h5 class="modal-title" id="addToCartModalLabel">Add to cart?</h5>
						<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<img src="/Images/References/New Wireframe 2.png" alt="preview">
					</div>
					<div class="modal-footer border-secondary">
						<button type="button" class="btn btn-outline-light" data-bs-dismiss="modal">Cancel</button>
						<button type="button" class="btn btn-primary">Add to cart</button>
					</div>
				</div>
			</div>
		</div>
	`
};
