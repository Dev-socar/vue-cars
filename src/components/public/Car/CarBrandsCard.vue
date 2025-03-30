<script setup>
defineProps({
  brand: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="group relative rounded-lg overflow-hidden shadow-lg">
    <img
      :src="brand.thumbail"
      class="h-full w-full object-cover brightness-45 group-hover:brightness-75 transition-colors ease-in duration-300"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <img
        :src="brand.logo"
        class="size-50 transition-all duration-300 ease-in-out group-hover:translate-y-10 group-hover:scale-90"
        :alt="`Imagen de la marca ${brand.tag}`"
      />
    </div>
  </div>
</template>
