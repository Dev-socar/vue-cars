<script setup>
import {
  faGasPump,
  faGaugeHigh,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

defineProps({
  service: { type: Object, required: true },
});

const iconMap = {
  faGasPump,
  faGaugeHigh,
  faCar,
};
</script>

<template>
  <div
    class="border-1 border-gray-300 p-5 rounded-lg w-1/5 flex items-center justify-evenly group hover:bg-gray-100 transition-colors ease-in duration-200"
  >
    <div
      class="bg-gray-100 size-[100px] rounded-lg flex justify-center items-center group-hover:bg-gray-200 transition-colors duration-200 ease-in-out"
    >
      <font-awesome-icon :icon="iconMap[service.icon]" class="text-5xl" />
    </div>
    <div class="space-y-1">
      <p>{{ service.description }}</p>
      <h3
        class="text-2xl font-semibold hover:text-blue-500 transition-colors ease-in duration-200 cursor-default"
      >
        {{ service.title }}
      </h3>
    </div>
  </div>
</template>
