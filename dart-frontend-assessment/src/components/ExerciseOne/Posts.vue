<template>
	<article class="post d-flex flex-column">
		<header class="post__header">
			<img
				:src="postData.post_image"
				:alt="postData.post_title + ' image'"
				class="post__image w-100"
			/>
		</header>
		<section class="post__body d-flex flex-column h-100 mt-4">
			<p class="post__summary text-center">{{ postData.post_summary }}</p>
			<button class="post__link mt-auto text-uppercase">Read More</button>
		</section>
	</article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	props: {
		postData: Object,
	},
});
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

$box-radius: 6px;

.post {
	width: 30%;
    min-width: 25rem;
	margin: 0 auto;
	margin-bottom: 3rem;
	padding: 1.75rem;
    border-radius: $box-radius;
    box-shadow: 0px 0px 5px 3px #ececec;

	@include media-breakpoint-down(md) {
		width: 100%;
		min-width: initial;
	}

	&__image {
		border-radius: $box-radius;
	}

	&__summary {
		font-size: 1.3rem;
	}

	&__link {
		max-width: fit-content;
		margin: 0 auto;
		padding: 0.75rem 1.75rem;
		background: transparent;
		font-size: 1.2rem;
		font-weight: 800;
		letter-spacing: 3px;
		border: 4px solid #333;
		border-radius: 2rem;
	}

	&::last-child {
		margin-bottom: 0rem;
	}

}
</style>
