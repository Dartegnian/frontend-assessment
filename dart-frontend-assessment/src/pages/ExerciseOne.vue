<template>
	<header>
		<h1>{{ heading }}</h1>
		<h3>{{ subheading }}</h3>
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

<style>
</style>
