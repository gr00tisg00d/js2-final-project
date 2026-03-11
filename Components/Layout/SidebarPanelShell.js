export default {
	name: "SidebarPanelShell",
	props: {
		eyebrow: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		isOpen: {
			type: Boolean,
			required: true,
		},
	},
	emits: ["toggle"],
	template: `

        <!-- Container -->
		<div class="p-3 rounded app-surface store-sidebar-panel" :class="isOpen ? 'is-expanded' : 'is-collapsed'">

            <!-- Header Content -->
			<div class="panel-header mb-3" :class="{ 'panel-header-split': !!$slots.actions }">

				<!-- Cart Panel(actions) -->
				<template v-if="$slots.actions">
					<button class="sidebar-panel-toggle sidebar-panel-toggle-label" type="button" @click="$emit('toggle')" :aria-expanded="String(isOpen)">
						<span>
							<span class="panel-eyebrow">{{ eyebrow }}</span>
							<span class="panel-title">{{ title }}</span>
						</span>
					</button>

					<slot v-if="isOpen" name="actions"></slot>

					<button class="sidebar-panel-toggle sidebar-panel-toggle-icon" type="button" @click="$emit('toggle')" :aria-expanded="String(isOpen)">
						<i class="bi" :class="isOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
					</button>
				</template>

				<!-- Filter Panel -->
				<button v-else class="sidebar-panel-toggle" type="button" @click="$emit('toggle')" :aria-expanded="String(isOpen)">
					<span>
						<span class="panel-eyebrow">{{ eyebrow }}</span>
						<span class="panel-title">{{ title }}</span>
					</span>
					<i class="bi" :class="isOpen ? 'bi-chevron-up' : 'bi-chevron-down'"></i>
				</button>
			</div>

            <!-- Body Content -->
			<div class="sidebar-panel-body" :class="{ collapsed: !isOpen }">
				<div class="sidebar-panel-body-inner">
					<slot></slot>
				</div>
			</div>
		</div>
	`,
};
