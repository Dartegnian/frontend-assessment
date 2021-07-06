<template>
	<router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
	components: {},
})

/**
 * Main app wrapper
 */
export default class App extends Vue {}
</script>

<style>
</style>
