<script setup>
import {
  faGasPump,
  faGaugeHigh,
  faCar,
} from "@fortawesome/free-solid-svg-icons";
</script>

<template>
  <article
    class="border-[0.2px] border-gray-300 rounded-tl-2xl rounded-tr-2xl pb-5 hover:border hover:border-blue-500 transition-colors duration-300 ease-in"
  >
    <div class="overflow-hidden rounded-tl-2xl rounded-tr-2xl relative h-64">
      <img
        src="/imagenes/cart-card.jpg"
        alt="Imagen del auto"
        class="hover:scale-105 transition-all duration-200 ease-in object-cover w-full h-full"
      />
    </div>
    <div class="mx-auto mt-5 w-10/11">
      <p class="font-semibold">Sport Cars / SUV Cars</p>
      <RouterLink
        :to="{ name: 'home' }"
        class="hover:text-blue-600 capitalize text-2xl font-bold transition-colors duration-200 ease-in"
        >Rapid Falcon Drift Max</RouterLink
      >
      <div class="mt-5">
        <ul class="flex flex-col gap-5">
          <li class="flex gap-5 items-center border-b-2 pb-3 border-gray-200">
            <font-awesome-icon :icon="faGasPump" class="text-2xl" />
            <p>Fuel Type: Diesel</p>
          </li>
          <li class="flex gap-5 items-center border-b-2 pb-3 border-gray-200">
            <font-awesome-icon :icon="faGaugeHigh" class="text-2xl" />
            <p>Max Velocity: 245Km</p>
          </li>
          <li class="flex gap-5 items-center border-b-2 pb-3 border-gray-200">
            <font-awesome-icon :icon="faCar" class="text-2xl" />
            <p>Transmition: Automatic</p>
          </li>
        </ul>
        <div class="mt-5">
          <p>Price: <span class="font-semibold text-xl">$12000</span></p>
        </div>
      </div>
    </div>
  </article>
</template>
