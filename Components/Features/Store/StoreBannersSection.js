export default {
	name: "StoreBannersSection",
	data() {
		const banners = [
			{
				name: "Trace Route",
				background: "linear-gradient(135deg, #122c34 0%, #2ec4b6 100%)",
				tagline: "Clean signal lines for technical profiles.",
			},
			{
				name: "Error Bloom",
				background: "linear-gradient(135deg, #4a2f48 0%, #f4a261 100%)",
				tagline: "Warm contrast for creative debugging energy.",
			},
			{
				name: "Dark Launch",
				background: "linear-gradient(135deg, #252422 0%, #eb5e28 100%)",
				tagline: "A louder, bolder banner for release-day momentum.",
			},
		];

		return {
			banners,
			selectedBannerName: banners[0].name,
			pinnedBannerName: "",
		};
	},
	computed: {
		selectedBanner() {
			return this.banners.find(
				(banner) => banner.name === this.selectedBannerName,
			);
		},
	},
	methods: {
		selectBanner(bannerName) {
			this.selectedBannerName = bannerName;
		},
		pinBanner() {
			this.pinnedBannerName = this.selectedBanner?.name ?? "";
		},
	},
	template: `
		<div class="d-flex flex-column gap-3">
			<div class="p-3 rounded app-surface d-flex align-items-baseline justify-content-between">
				<div>
					<h2 class="h5 mb-1">Banners</h2>
					<p class="text-body-secondary mb-0">Preview profile headers and pin the one that best matches the tone of your public profile.</p>
				</div>
				<span v-if="pinnedBannerName" class="small text-body-secondary">Pinned: {{ pinnedBannerName }}</span>
			</div>

			<div class="p-3 rounded app-surface d-flex flex-column gap-3">
				<div class="store-banner-preview rounded-4" :style="{ background: selectedBanner.background }" v-if="selectedBanner">
					<div class="store-banner-preview__content">
						<div class="small text-uppercase text-light-emphasis">Profile banner preview</div>
						<div class="h5 mb-1 text-white">{{ selectedBanner.name }}</div>
						<div class="small text-white-50">{{ selectedBanner.tagline }}</div>
					</div>
				</div>
				<div class="row g-2">
					<div class="col-12 col-md-4" v-for="banner in banners" :key="banner.name">
						<button
							class="btn w-100 text-start p-3 app-surface store-choice-card h-100"
							type="button"
							:class="{ 'is-selected': selectedBannerName === banner.name }"
							@click="selectBanner(banner.name)"
						>
							<div class="store-banner-swatch rounded-3 mb-2" :style="{ background: banner.background }"></div>
							<div class="fw-semibold">{{ banner.name }}</div>
							<div class="small text-body-secondary">{{ banner.tagline }}</div>
						</button>
					</div>
				</div>
				<div class="d-flex justify-content-end">
					<button class="btn btn-primary btn-sm" type="button" @click="pinBanner">Pin banner</button>
				</div>
			</div>
		</div>
	`,
};
