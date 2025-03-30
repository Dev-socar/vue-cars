<script setup>
defineProps({
  classes: {
    type: String,
    default: "",
  },
});
</script>

<template>
  <section :class="` mt-20 lg:mt-30 mx-auto relative ${classes}`">
    <slot />
  </section>
</template>
