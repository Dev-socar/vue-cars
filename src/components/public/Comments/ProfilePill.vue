<script setup>
defineProps({
  comment: {
    type: Object,
    required: true,
  },
});

</script>

<template>
  <button
    class="bg-black text-white p-2 rounded-full flex items-center lg:w-full hover:bg-blue-600 transition-colors ease-in duration-200 cursor-pointer gap-5"
  >
    <div class="overflow-hidden rounded-full size-25">
      <img
        :src="comment.avatar"
        :alt="`Imagen del comentario de ${comment.name}`"
      />
    </div>
    <div class="flex flex-col items-start space-y-2">
      <h3 class="text-2xl">{{comment.name}}</h3>
      <p class="text-sm">{{ comment.username }}</p>
    </div>
  </button>
</template>
