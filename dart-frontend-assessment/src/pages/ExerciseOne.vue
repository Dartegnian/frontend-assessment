<template>
  <header>
    <h1>{{ heading }}</h1>
    <h3>{{ subheading }}</h3>
  </header>
</template>

<script lang="tsx">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      heading: "Hello, Developer!",
      subheading: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    };
  },
});
</script>

<style>
</style>