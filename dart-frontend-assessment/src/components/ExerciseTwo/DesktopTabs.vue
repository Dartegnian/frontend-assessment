<template>
	<section class="desktop-tabs">
		<header
			:key="section.title"
			@click="changeSelection(index)"
			v-for="(section, index) in sectionData"
		>
			{{ section.title }}
		</header>
		<article v-html="sectionData[activeSelection].content"></article>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		activeSelection: Number,
		sectionData: Array,
	},
	methods: {
		changeSelection(newSelection: Number) {
			this.$emit("changeSelection", newSelection);
		},
	},
	emits: ["changeSelection"],
});
</script>

<style scoped lang="scss">
</style>
