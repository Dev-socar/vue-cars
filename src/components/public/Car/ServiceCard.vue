<script setup>
defineProps({
  service: {
    type: Object,
    required: true,
  },
});
</script>

<template>
<article class="overflow-hidden rounded-xl group">
  <div class="relative overflow-hidden rounded-xl">
    <img
      :src="service.image"
      :alt="`Imagen del servicio ${service.title}`"
      class="group-hover:scale-110 group-hover:brightness-50 transition-all ease-in duration-200 w-full h-auto"
    />
  </div>
  <div class="text-center mt-3">
    <h3 class="text-2xl font-semibold text-white capitalize">
      {{ service.title }}
    </h3>
  </div>
</article>

</template>
