export default {
	name: "StoreSectionNav",
	props: {
		activeSection: {
			type: String,
			required: true,
		},
		dismissModal: {
			type: Boolean,
			default: false,
		},
	},
	emits: ["select-section"],
	template: `
		<div class="sidebar-nav-grid">
			<button
				class="sidebar-nav-button"
				:class="{ active: activeSection === 'home' }"
				:data-bs-dismiss="dismissModal ? 'modal' : null"
				type="button"
				@click="$emit('select-section', 'home')"
			>
				Home
			</button>
			<button
				class="sidebar-nav-button"
				:class="{ active: activeSection === 'icons' }"
				:data-bs-dismiss="dismissModal ? 'modal' : null"
				type="button"
				@click="$emit('select-section', 'icons')"
			>
				Icons
			</button>
			<button
				class="sidebar-nav-button"
				:class="{ active: activeSection === 'themes' }"
				:data-bs-dismiss="dismissModal ? 'modal' : null"
				type="button"
				@click="$emit('select-section', 'themes')"
			>
				IDE Themes
			</button>
			<button
				class="sidebar-nav-button"
				:class="{ active: activeSection === 'banners' }"
				:data-bs-dismiss="dismissModal ? 'modal' : null"
				type="button"
				@click="$emit('select-section', 'banners')"
			>
				Banners
			</button>
		</div>
	`,
};
