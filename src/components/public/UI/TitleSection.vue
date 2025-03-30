<script setup>
import { faCar } from "@fortawesome/free-solid-svg-icons";

defineProps({
  spanText: { type: String },
  headingText: { type: String },
  classes: { type: String },
});
</script>

<template>
  <div
    class="flex flex-col  gap-3"
    :class="classes"
  >
    <div class="flex gap-4 border-b-2 pb-1">
      <span class="lg:text-lg">{{ spanText }}</span>
      <font-awesome-icon :icon="faCar" class="text-2xl" />
    </div>
    <h2 class="font-bold text-3xl capitalize lg:text-5xl">{{ headingText }}</h2>
  </div>
</template>
