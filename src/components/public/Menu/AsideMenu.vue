<script setup>
import menuBurgerCloseIcon from "/icons/menuHamburgerClose.svg";

defineProps({
  drawer: { type: Boolean },
  toggleDrawer: { type: Function },
});
</script>

<template>
  <aside
    class="fixed inset-0 z-30 transition-all duration-500 ease-in-out"
    :class="{ 'translate-x-0': drawer, '-translate-x-full': !drawer }"
    @click="toggleDrawer"
  >
    <div class="absolute top-0 left-0 w-[90%] h-full bg-black p-4">
      <div class="flex flex-col gap-10 mt-15 w-[80%] mx-auto">
        <button @click.stop="toggleDrawer" class="self-end cursor-pointer">
          <img
            :src="menuBurgerCloseIcon"
            class="size-12 self-end"
            alt="Icono svg"
          />
        </button>
        <RouterLink
          to="/#vehicles"
          class="text-2xl text-white uppercase hover:text-blue-500 transition-colors duration-300 ease-in"
          >Vehicles</RouterLink
        >
        <RouterLink
          to="/#services"
          class="text-2xl text-white uppercase hover:text-blue-500 transition-colors duration-300 ease-in"
          >Services</RouterLink
        >
        <RouterLink
          to="/#plans"
          class="text-2xl text-white uppercase hover:text-blue-500 transition-colors duration-300 ease-in"
          >Plans</RouterLink
        >
        <RouterLink
          to="/#comments"
          class="text-2xl text-white uppercase hover:text-blue-500 transition-colors duration-300 ease-in"
          >Comments</RouterLink
        >
        <RouterLink
          to="/#contact"
          class="text-2xl text-white uppercase hover:text-blue-500 transition-colors duration-300 ease-in"
          >Contact</RouterLink
        >
      </div>
    </div>
  </aside>
</template>
