export default {
	name: "StorePage",
	template: `
        <main class="container flex-grow-1 py-3 d-flex flex-column overflow-hidden">
            <!-- Mobile: open filter/cart modals -->
            <div class="position-fixed top-50 end-0 translate-middle-y me-3 d-flex flex-column gap-2 d-lg-none z-3">
                <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#filterModal" aria-label="Open filters">
                    <i class="bi bi-funnel"></i>
                </button>
                <button class="btn btn-primary rounded-circle" type="button" data-bs-toggle="modal" data-bs-target="#cartModal" aria-label="Open cart">
                    <i class="bi bi-cart"></i>
                </button>
            </div>

            <div class="row g-3 store-container">
                <!-- Desktop sidebar -->
                <aside class="col-lg-3 d-none d-lg-block">
                    <div class="p-3 rounded app-surface mb-3">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <span class="fw-semibold">Filters</span>
                            <button class="btn btn-sm btn-outline-primary" type="button">Clear</button>
                        </div>
                        <ul class="nav nav-pills flex-column gap-1 mb-3">
                            <li class="nav-item"><button class="nav-link active" type="button">Icons</button></li>
                            <li class="nav-item"><button class="nav-link" type="button">IDE Themes</button></li>
                            <li class="nav-item"><button class="nav-link" type="button">Banners</button></li>
                        </ul>
                        <filter-panel></filter-panel>
                    </div>

                    <div class="p-3 rounded app-surface">
                        <div class="d-flex align-items-center justify-content-between mb-2">
                            <span class="fw-semibold">Cart</span>
                            <button class="btn btn-sm btn-outline-primary" id="clearCartBtn" type="button">Clear</button>
                        </div>
                        <cart-panel></cart-panel>
                        <button class="btn btn-primary w-100 mt-3" type="button">Checkout</button>
                    </div>
                </aside>

                <!-- Store grid -->
                <section class="col-12 col-lg-9 d-flex flex-column">
                    <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-xl-5 g-2 store-scroll">
                        
                    </div>
                </section>
            </div>
        </main>
    `,
};
