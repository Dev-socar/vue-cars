<script setup>
import {
  faGasPump,
  faGaugeHigh,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
defineProps({
  imagen: {
    type: String,
    default: "/imagenes/vehicle.png",
  },
});
</script>

<template>
  <h3 class="text-center text-6xl font-semibold">
    Experience the future of driving with the EcoCruise 300E
  </h3>
  <h2 class="text-center text-9xl text-gray-200 mt-1">EcoCruise 300E</h2>
  <div class="relative">
    <img :src="imagen" alt="Imagen del auto" class="mx-auto" />
  </div>
  <div class="flex  items-center mt-10 gap-10">
    <!-- Columna 1: Texto -->
    <div class="space-y-5 lg:w-2/6">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ducimus
        voluptates sint modi, dicta nesciunt rerum quo, autem laboriosam ullam
        placeat perferendis labore voluptatem quibusdam hic ratione magni
        corporis laudantium.
      </p>
      <a class="underline hover:text-blue-500 transition-colors ease-in duration-200" href="#">View Details</a>
    </div>

    <!-- Columna 2: Estadísticas -->
    <div class="flex justify-center gap-10 lg:w-3/6">
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="faGaugeHigh" class="text-6xl" />
        <p class="font-bold text-4xl">
          453 <sup class="text-2xl font-normal">KM</sup>
          <span class="block font-normal text-lg"> Top Speed</span>
        </p>
      </div>
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="faCar" class="text-6xl" />
        <p class="font-bold text-4xl">
          Automatic
          <span class="block font-normal text-lg"> Transmition</span>
        </p>
      </div>
      <div class="flex items-center gap-5">
        <font-awesome-icon :icon="faGasPump" class="text-6xl" />
        <p class="font-bold text-4xl">
          Premium
          <span class="block font-normal text-lg"> Fuel</span>
        </p>
      </div>
    </div>
  </div>
</template>
