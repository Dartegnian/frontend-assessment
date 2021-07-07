<template>
	<main class="landing-page container">
		<section class="landing-page__content">
			<h1 class="landing-page__heading">Click the links to go to an exercise</h1>
			<div class="landing-page__links d-flex justify-content-between mt-4">
				<router-link
					to="/exercise-one"
					class="landing-page__link d-flex justify-content-center align-items-center"
				>
					Exercise One
				</router-link>
				<router-link
					to="/exercise-two"
					class="landing-page__link d-flex justify-content-center align-items-center"
				>
					Exercise Two
				</router-link>
			</div>
		</section>
	</main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
});
</script>

<style scoped lang="scss">
@import "../assets/scss/colors";
@import "../assets/scss/mixins";
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.landing-page {
    height: 100%;

	&__content {
		margin-top: 45vh;

		@include media-breakpoint-down(md) {
			margin-top: 40vh;
		}
	}

	&__heading {
		text-transform: uppercase;
		font-weight: 300;
		text-align: center;
	}

	&__links {
		width: 75%;
		margin: 0 auto;

		@include media-breakpoint-down(md) {
			flex-direction: column;
		}
	}

	&__link {
		width: 45%;
		height: 3rem;
		color: #fff;
		text-decoration: none;
		@include set-box-styling;
		@include set-box-transitions;
		@include set-theme-gradient;

		&:hover {
			box-shadow: 0 12px 30px 0 rgb(0, 0, 0, 20%);
		}

		@include media-breakpoint-down(md) {
			width: 100%;
			margin-bottom: 1rem;
		}
	}
}
</style>
