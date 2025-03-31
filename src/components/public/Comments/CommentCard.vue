<script setup>
defineProps({
  comment: {
    type: Object,
  },
});
</script>

<template>
  <article
    class="mt-10 p-20 bg-white rounded-lg shadow-lg grid lg:grid-cols-2 gap-5"
  >
    <div>
      <div class="flex items-center gap-5">
        <img
          class="size-35"
          src="/icons/comillas.svg"
          alt="Imagen de unas comillas"
        />
        <div>
          <h3 class="text-2xl font-semibold">{{ comment.shortReview }}</h3>
          <p>Stars</p>
        </div>
      </div>
      <p class="mt-5">{{ comment.text }}</p>
      <p class="mt-5">By {{ comment.name }}</p>
    </div>
    <div class="grid grid-cols-3 gap-5">
      <div
        v-for="(image, index) in comment.images"
        :key="index"
        class="overflow-hidden rounded-lg"
      >
        <img :src="image" :alt="'Imagen subida ' + (index + 1)" />
      </div>
    </div>
  </article>
</template>
