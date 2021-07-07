<template>
	<article class="desktop-tabs w-100">
		<header class="desktop-tabs__header d-flex justify-content-between">
			<button
				:key="section.title"
				@click="changeSelection(index)"
				v-for="(section, index) in sectionData"
				v-bind:class="'desktop-tabs__tab' +
					(activeSelection === index ? ' desktop-tabs__tab--active' : '')
				"
			>
				{{ section.title }}
			</button>
		</header>
		<section
			class="desktop-tabs__content-area p-3 mt-4"
			v-html="sectionData[activeSelection].content"
		></section>
	</article>
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
@import "../../assets/scss/colors";
@import "../../assets/scss/mixins";

.desktop-tabs {
	&__tab {
		width: 23%;
		height: 3rem;
		@include set-box-styling;
		@include set-box-transitions;

		&:hover {
			color: $light-primary;
			box-shadow: 0 12px 30px 0 rgb(0, 0, 0, 20%);
		}

		&--active {
			color: #fff;
			@include set-theme-gradient;

			&:hover {
				color: #fff;
			}
		}
	}

	&__content-area {
		@include set-box-styling;
	}
}
</style>
