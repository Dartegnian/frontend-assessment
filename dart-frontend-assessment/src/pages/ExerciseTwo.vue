<template>
	<main class="page-exercise-two">
		<section class="container d-flex justify-content-center align-items-center mt-5">
			<MobileAccordion
				v-if="getIsMobile && contentData.length != 0"
				v-bind:sectionData="contentData"
				v-bind:activeSelection="getSelection"
				@change-selection="setActiveTab"
			/>
			<DesktopTabs
				v-else-if="!getIsMobile && contentData.length != 0"
				v-bind:sectionData="contentData"
				v-bind:activeSelection="getSelection"
				@change-selection="setActiveTab"
			/>
			<span v-else class="spinner-border" role="status"></span>
		</section>
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

import content from "@/data/data.json";
import getBreakpoints from "@/functions/getBreakpoints";
import DesktopTabs from "@/components/ExerciseTwo/DesktopTabs.vue";
import MobileAccordion from "@/components/ExerciseTwo/MobileAccordion.vue";

export default defineComponent({
	data() {
		return {
			contentData: [] as Object,
			windowData: getBreakpoints(),
			activeTab: Number,
		};
	},
	components: {
		DesktopTabs,
		MobileAccordion,
	},
	computed: {
		...mapGetters(["getSelection"]),
		getIsMobile: function() {
			if (this.windowData.breakpoint === "sm" || this.windowData.breakpoint === "xs") {
				return true;
			} else {
				return false;
			}
		},
	},
	methods: {
		getData() {
			this.contentData = content;
		},
		setActiveTab(newSelection: Number) {
			if (newSelection !== this.getSelection) {
				this.$store.commit("changeSelection", newSelection);
			}
		},
	},
	mounted() {
		setTimeout(() => {
			this.getData();
		}, 500);
	},
});
</script>

<style scoped lang="scss">
</style>
