<template>
	<article class="post">
		<header class="post__header">
			<img :src="postData.post_image" alt="">
		</header>
		<section class="post__body">
			<p>{{ postData.post_summary }}</p>
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
.post {
	display: flex;
	flex-direction: column;
}
</style>
