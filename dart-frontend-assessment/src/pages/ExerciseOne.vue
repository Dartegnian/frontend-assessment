<template>
	<header class="hero-banner w-100 d-flex flex-column align-items-center justify-content-center">
		<h1 class="hero-banner__heading text-light">{{ heading }}</h1>
		<h3 class="hero-banner__subheading text-light">{{ subheading }}</h3>
	</header>
	<section class="posts-area">
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
	min-height: 650px;
	background-image: url(http://via.placeholder.com/1920x650);
    background-position: center;
	background-repeat: no-repeat;
	background-size: cover;

	@include media-breakpoint-down(md) {
		min-height: 600px;
		background-image: url(http://via.placeholder.com/600x600);
	}

	&__heading, &__subheading {
		z-index: 1;
	}

	&__heading {
		margin-bottom: 1rem;
		font-weight: bold;
		font-size: 5rem;
	}

	&__subheading {
		font-size: 2.5rem;
		font-weight: 400;
		letter-spacing: 1px;
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
</style>
