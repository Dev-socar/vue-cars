<script setup>
import Menu from '../Menu/Menu.vue';
</script>

<template>
    <div class="relative">
    <header class="w-full h-[650px] lg:h-[800px] relative">
      <div class="absolute inset-0 bg-black opacity-50 z-10"></div>
      <img
        src="/imagenes/header-imagen.jpg"
        class="h-full w-full object-cover"
        alt="Imagen del header"
      />

      <Menu />

      <div
        class="absolute inset-0 flex flex-col items-center justify-center z-20 w-[85%] mx-auto"
      >
        <h1 class="text-4xl lg:text-7xl text-center text-white font-semibold">
          Your Journey starts with our keys
        </h1>
        <p class="text-white mt-2 text-center lg:text-xl lg:w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eaque
          alias quod ducimus consectetur necessitatibus illo repudiandae libero.
        </p>
      </div>
    </header>
  </div>
</template>



