<script setup>
import useMenuHamburger from "@/composable/useMenuHamburguer";
import menuBurgerIcon from "/icons/menuHamburger.svg";
import Link from "./Link.vue";
import AsideMenu from "./AsideMenu.vue";
const { toggleDrawer, drawer } = useMenuHamburger();
</script>

<template>
  <nav
    class="absolute top-0 left-0 right-0 z-20 lg:z-50 pt-6 px-6 flex justify-between items-center"
  >
    <button @click="toggleDrawer" class="lg:hidden size-12 cursor-pointer">
      <img :src="menuBurgerIcon" class="size-12" alt="Icono svg" />
    </button>

    <h1 class="text-white text-4xl font-bold">
      <RouterLink :to="{ name: 'home' }">Vue Cars</RouterLink>
    </h1>

    <div class="hidden lg:flex gap-4">
      <ul class="flex gap-5">
        <li><Link :texto="'Vehicles'" :url="'/#vehicles'" /></li>
        <li><Link :texto="'Services'" :url="'/#services'" /></li>
        <li><Link :texto="'Plans'" :url="'/#plans'" /></li>
        <li><Link :texto="'Comments'" :url="'/#comments'" /></li>
        <li><Link :texto="'Contact'" :url="'/#contact'" /></li>
      </ul>
    </div>
  </nav>

  <AsideMenu :drawer="drawer" :toggleDrawer="toggleDrawer" />
</template>
