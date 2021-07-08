<template>
	<div class="mobile-accordion d-flex flex-column">
		<article
			:key="section.title"
			@click="changeSelection(index, activeSelection)"
			v-for="(section, index) in sectionData"
			v-bind:class="'mobile-accordion__item' +
				(activeSelection === index && !isCollapsed
					? ' mobile-accordion__item--active'
					: '') +
				(activeSelection === index && isCollapsed
					? ' mobile-accordion__item--collapsed'
					: '')
			"
		>
			<header v-bind:class="'mobile-accordion__header d-flex justify-content-center' +
				(activeSelection === index && !isCollapsed
					? ' mobile-accordion__header--active'
					: '') +
				(activeSelection === index && isCollapsed
					? ' mobile-accordion__header--collapsed'
					: '')
			">
				{{ section.title }}
				<i v-bind:class="'mobile-accordion__triangle' +
					(activeSelection === index && !isCollapsed
						? ' mobile-accordion__triangle--active'
						: '') +
					(activeSelection === index && isCollapsed
						? ' mobile-accordion__triangle--collapsed'
						: '')
				">▼</i>
			</header>
			<section
				v-bind:class="'mobile-accordion__content-area' +
					(activeSelection === index ? ' mobile-accordion__content-area--active' : '') +
					(isCollapsed ? ' mobile-accordion__content-area--collapsed' : '')
				"
				v-html="section.content"
			></section>
		</article>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	data() {
		return {
			isCollapsed: false,
		};
	},
	props: {
		activeSelection: Number,
		sectionData: Array,
	},
	methods: {
		changeSelection(newSelection: Number, activeSelection: Number) {
			if (newSelection !== activeSelection && this.isCollapsed) {
				this.$emit("changeSelection", newSelection);
				this.isCollapsed = !this.isCollapsed;
			} else if (newSelection !== activeSelection) {
				this.$emit("changeSelection", newSelection);
			} else {
				this.isCollapsed = !this.isCollapsed;
			}
		},
	},
	emits: ["changeSelection"],
});
</script>

<style scoped lang="scss">
@import "../../assets/scss/colors";
@import "../../assets/scss/mixins";

.mobile-accordion {
	&__header {
		height: 3rem;
		align-items: center;
		position: relative;
		transition: color linear .25s, box-shadow linear .25s;
		@include set-box-styling;

		&--active {
			color: #fff;
			box-shadow: 0 12px 30px 0 rgb(0 0 0 / 20%);
			@include set-theme-gradient;
		}
	}

	&__content-area {
		overflow: hidden;
		max-height: 0rem;
		text-align: justify;
		transition: padding 0.4s linear, margin 0.4s linear, max-height 0.4s linear;

		&--active {
			max-height: 12rem;
			margin-top: 1rem;
			padding: 1rem;
		}

		&--collapsed {
			max-height: 0rem;
			margin: 0rem;
			padding: 0rem;
		}
	}

	&__triangle {
		width: 2rem;
		height: 2rem;
		display: flex;
		justify-content: center;
		position: absolute;
		right: 2%;
		font-size: 1.3rem;
		transition: transform linear 0.25s;

		&--active {
			transform: rotate(180deg);
		}
	}
}
</style>
