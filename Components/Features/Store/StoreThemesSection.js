export default {
	name: "StoreThemesSection",
	data() {
		const themes = [
			{
				name: "Signal Ember",
				accent: "#eb5e28",
				background: "linear-gradient(135deg, #252422 0%, #403d39 100%)",
				editor: "#1f1d1a",
				description:
					"Warm contrast for debugging sessions and readable terminal output.",
			},
			{
				name: "Circuit Tide",
				accent: "#2ec4b6",
				background: "linear-gradient(135deg, #122c34 0%, #224870 100%)",
				editor: "#0f1f24",
				description:
					"Cool, technical blues for systems work and calmer focus blocks.",
			},
			{
				name: "Night Bloom",
				accent: "#f4a261",
				background: "linear-gradient(135deg, #2b1d26 0%, #4a2f48 100%)",
				editor: "#1d1420",
				description:
					"A softer late-night palette that keeps the workspace atmospheric.",
			},
		];

		return {
			themes,
			selectedThemeName: themes[0].name,
			appliedThemeName: "",
		};
	},
	computed: {
		selectedTheme() {
			return this.themes.find((theme) => theme.name === this.selectedThemeName);
		},
	},
	methods: {
		selectTheme(themeName) {
			this.selectedThemeName = themeName;
		},
		applyTheme() {
			this.appliedThemeName = this.selectedTheme?.name ?? "";
		},
	},
	template: `
		<div class="d-flex flex-column gap-3">
			<div class="p-3 rounded app-surface d-flex align-items-baseline justify-content-between">
				<div>
					<h2 class="h5 mb-1">IDE Themes</h2>
					<p class="text-body-secondary mb-0">Choose a palette, inspect the preview, and apply the one that fits your current coding session.</p>
				</div>
				<span v-if="appliedThemeName" class="small text-body-secondary">Applied: {{ appliedThemeName }}</span>
			</div>

			<div class="row g-3">
				<div class="col-12 col-lg-7">
					<div class="row g-2">
						<div class="col-12" v-for="theme in themes" :key="theme.name">
							<button
								class="btn w-100 text-start p-3 app-surface store-choice-card"
								type="button"
								:class="{ 'is-selected': selectedThemeName === theme.name }"
								@click="selectTheme(theme.name)"
							>
								<div class="d-flex align-items-center justify-content-between gap-3">
									<div>
										<div class="fw-semibold">{{ theme.name }}</div>
										<div class="small text-body-secondary">{{ theme.description }}</div>
									</div>
									<span class="store-color-chip" :style="{ backgroundColor: theme.accent }"></span>
								</div>
							</button>
						</div>
					</div>
				</div>
				<div class="col-12 col-lg-5" v-if="selectedTheme">
					<div class="p-3 rounded app-surface h-100 d-flex flex-column gap-3">
						<div class="store-theme-preview" :style="{ background: selectedTheme.background }">
							<div class="store-theme-preview__editor" :style="{ backgroundColor: selectedTheme.editor }">
								<div class="small" :style="{ color: selectedTheme.accent }">const activeTheme = '{{ selectedTheme.name }}';</div>
								<div class="small text-light">renderStore(activeTheme);</div>
							</div>
						</div>
						<div class="d-flex align-items-center justify-content-between gap-3">
							<div>
								<div class="fw-semibold">{{ selectedTheme.name }}</div>
								<div class="small text-body-secondary">{{ selectedTheme.description }}</div>
							</div>
							<button class="btn btn-primary btn-sm" type="button" @click="applyTheme">Apply theme</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,
};
