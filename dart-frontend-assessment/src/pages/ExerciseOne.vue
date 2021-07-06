<template>
	<header class="hero-banner">
		<h1 class="hero-banner__heading">{{ heading }}</h1>
		<h3 class="hero-banner__subheading">{{ subheading }}</h3>
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
			heading: "Hello, Developer!",
			subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			data,
		};
	},
});
</script>

<style lang="scss">
.hero-banner {
	width: 100%;

	&__heading {
		margin: 0;
	}
}
</style>
