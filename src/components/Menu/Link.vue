<script setup>
import { RouterLink } from "vue-router";

defineProps({
  texto: { type: String },
  url: { type: String },
});
</script>

<template>
  <RouterLink
    :to="url"
    class="text-sm sm:text-base md:text-lg lg:text-xl text-white cursor-pointer"
    >{{ texto }}</RouterLink
  >
</template>
