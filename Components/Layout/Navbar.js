export default {
	name: "Navbar",
	props: {
		userProfile: {
			type: Object,
			required: true,
		},
	},
	computed: {
		activeProfileIcon() {
			return (
				this.userProfile.inventory.find(
					(item) =>
						item.itemType === "icon" &&
						item.title === this.userProfile.activeIcon,
				)?.img ?? ""
			);
		},
	},
	template: `
		<nav class="py-2">
			<div class="container d-flex justify-content-center">
				<div class="navbar app-navbar px-3 py-2 ">
					<div class="app-navbar-inner">

						<!-- Navbuttons -->
						<div class="navbar-link-group">
							<a href="/" class="btn icon-btn d-flex align-items-center justify-content-center text-decoration-none">
								<i class="bi bi-bug-fill fs-4"></i>
							</a>
							<a href="/" class="btn icon-btn d-flex align-items-center justify-content-center text-decoration-none">
								<i class="bi bi-bar-chart-fill fs-4"></i>
							</a>
							<a href="/" class="btn icon-btn d-flex align-items-center justify-content-center text-decoration-none active">
								<i class="bi bi-coin fs-4"></i>
							</a>
						</div>

						<!-- Right side of nav -->
						<div class="navbar-meta-group">
							<!-- Balance / Level / Stat -->
							<div class="navbar-status-group">
								<div class="navbar-status-card">
									<span class="navbar-status-label">Balance</span>
									<span class="navbar-status-value"><i class="bi bi-coin align-middle"></i> {{ userProfile.balance }}</span>
								</div>
								<div class="navbar-status-card">
									<span class="navbar-status-label">Level</span>
									<span class="navbar-status-value"> {{ userProfile.level }}</span>
								</div>
							</div>

							<!-- User Profile Picture -->
							<div class="navbar-avatar-shell" aria-label="Active profile icon">
								<img v-if="activeProfileIcon" :src="activeProfileIcon" alt="Active profile icon" class="navbar-avatar-image" />
								<i v-else class="bi bi-person-fill navbar-avatar-fallback"></i>
							</div>
						</div>


					</div>
				</div>
			</div>
		</nav>
	`,
};
