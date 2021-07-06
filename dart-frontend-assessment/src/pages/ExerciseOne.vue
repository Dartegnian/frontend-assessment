<template>
	<header class="hero-banner container-fluid d-flex align-items-center justify-content-center">
		<h1 class="hero-banner__heading text-light">{{ heading }}</h1>
		<h3 class="hero-banner__subheading text-light">{{ subheading }}</h3>
	</header>
	<section class="posts-area d-flex flex-wrap justify-content-between">
		<Posts v-for="post in data" :key="post.post_id" v-bind:postData="post"/>
	</section>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

import data from "@/data/posts.json";
import Posts from "@/components/ExerciseOne/Posts.vue";

export default defineComponent({
	components: {
		Posts,
	},
	data() {
		return {
			heading: "Hello Developer!",
			subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			data,
		};
	},
});
</script>

<style scoped lang="scss">
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.hero-banner {
	position: relative;
	flex-direction: column;
	min-height: 650px;
	background-image: url(http://via.placeholder.com/1920x650);
    background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@include media-breakpoint-down(md) {
		min-height: 480px;
		background-image: url(http://via.placeholder.com/600x600);
	}

	&__heading, &__subheading {
		z-index: 1;
	}

	&__heading {
		margin-bottom: 1rem;
		font-weight: bold;
		font-size: 5rem;

		@include media-breakpoint-down(md) {
			font-size: 3rem;
			line-height: 4rem;
			text-align: center;
			word-break: break-word;
		}
	}

	&__subheading {
		font-size: 2.5rem;
		font-weight: 400;
		text-align: center;
		letter-spacing: 1px;

		@include media-breakpoint-down(md) {
			font-size: 1.5rem;
			line-height: 2.5rem;
		}
	}

	&::after {
		content: "";
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0.3;
		background-color: #000;
	}
}

.posts-area {
    margin: 0 auto;
    margin-top: 3rem;
	width: 75%;

	@include media-breakpoint-down(md) {
		width: 85%;
	}
}
</style>
