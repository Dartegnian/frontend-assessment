<template>
	<section
		:key="section.title"
		@click="changeSelection(index)"
		v-for="(section, index) in sectionData"
		v-bind:class="
			'desktop-tabs' + (activeSelection === index ? ' active' : '')
		"
	>
		<header>
			{{ section.title }}
		</header>
		<article v-html="section.content"></article>
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
