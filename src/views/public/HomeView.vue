<script setup>
import Header from "@/components/public/Header/Header.vue";
import TitleSection from "@/components/public/UI/TitleSection.vue";
import CartCard from "@/components/public/Cart/CartCard.vue";
import CartBrandsCard from "@/components/public/Cart/CartBrandsCard.vue";
import Footer from "@/components/public/Footer/Footer.vue";
import FlechasSwiper from "@/components/public/UI/FlechasSwiper.vue";
import Section from "@/components/public/UI/Section.vue";
import CartSlide from "@/components/public/Cart/CartSlide.vue";
import CartService from "@/components/public/Cart/CartService.vue";

import { servicesRide } from "@/helpers/tags";
</script>
<template>
  <Header />
  <main class="w-[95%] mt-20 lg:mt-50 mx-auto relative" id="vehicles">
    <div
      class="flex flex-col items-center gap-5 lg:flex-row lg:gap-0 lg:justify-between lg:items-center"
    >
      <TitleSection
        :spanText="'Effortless Rendering Solutions'"
        :headingText="'Browse Our Rental Cars'"
        :classes="'items-center lg:items-start'"
      />

      <div>
        <div
          class="flex gap-5 flex-wrap justify-center items-center border-gray-300 border-b-1 pb-2"
        >
          <a
            href="#"
            class="text-lg font-semibold relative after:content-['/'] after:ml-2 after:text-black text-blue-600"
            >All</a
          >
          <a
            href="#"
            class="text-lg font-semibold relative after:content-['/'] after:ml-2"
            >Economy</a
          >
          <a
            href="#"
            class="text-lg font-semibold relative after:content-['/'] after:ml-2"
            >Electric</a
          >
          <a
            href="#"
            class="text-lg font-semibold relative after:content-['/'] after:ml-2"
            >Transmition Automatic</a
          >
          <a href="#" class="text-lg font-semibold">Transmition Manual</a>
        </div>
      </div>
    </div>

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      <CartCard v-for="cart in 4" :key="cart" />
    </div>
  </main>

  <Section class="w-[95%]">
    <TitleSection
      :spanText="'Explore By Brand'"
      :headingText="'Our Highlighted Vehicles'"
      :classes="'items-center'"
    />
    <swiper-container
      class="mt-5"
      slides-per-view="1"
      loop="true"
      space-between="10"
      :navigation="{
        nextEl: '.btn-sig',
        prevEl: '.btn-ant',
      }"
      :breakpoints="{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }"
    >
      <swiper-slide><CartBrandsCard /></swiper-slide>
      <swiper-slide><CartBrandsCard /></swiper-slide>
      <swiper-slide><CartBrandsCard /></swiper-slide>
      <swiper-slide><CartBrandsCard /></swiper-slide>
      <swiper-slide><CartBrandsCard /></swiper-slide>
    </swiper-container>
    <div class="btns-swiper flex justify-center items-center gap-10 mt-8">
      <FlechasSwiper classSig="btn-sig" classPrev="btn-ant" />
    </div>
  </Section>

  <Section :class="` bg-gray-200 pb-10 lg:p-10 w-[95%] lg:w-full `">
    <div class="w-[95%] bg-white pb-30 lg:pb-0 rounded-b-sm mx-auto relative">
      <swiper-container
        class="mt-5 p-10"
        slides-per-view="1"
        loop="true"
        speed="800"
        space-between="10"
        :navigation="{
          nextEl: '.btn-sig-2',
          prevEl: '.btn-ant-2',
        }"
      >
        <swiper-slide lazy="true">
          <CartSlide :imagen="'/imagenes/vehicle.png'" />
        </swiper-slide>
        <swiper-slide lazy="true">
          <CartSlide :imagen="'/imagenes/vehicle-02.png'" />
        </swiper-slide>
        <swiper-slide lazy="true">
          <CartSlide :imagen="'/imagenes/vehicle.png'" />
        </swiper-slide>
        <swiper-slide lazy="true">
          <CartSlide :imagen="'/imagenes/vehicle-02.png'" />
        </swiper-slide>
      </swiper-container>

      <div
        class="flex justify-end gap-10 absolute left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-0 lg:w-1/6 lg:pr-5 lg:bottom-1/14 lg:-translate-y-1/2 z-10"
      >
        <FlechasSwiper classSig="btn-sig-2" classPrev="btn-ant-2" />
      </div>
    </div>
    <a
      class="block w-max mt-10 mx-auto py-4 px-8 rounded-full bg-blue-600 hover:bg-black transition-colors ease-in duration-200 text-white text-lg text-center capitalize"
      href="#"
      >Explore all avaible cars</a
    >
  </Section>

  <Section class="w-[95%]">
    <TitleSection
      :spanText="'Expert Car Care'"
      :headingText="'Reliable Service For Every Ride'"
      :classes="'items-center text-center lg:text-left'"
    />

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto">
      <CartService
        v-for="service in servicesRide"
        :key="service.tag"
        :service="service"
      />
    </div>
  </Section>

  <Section class="w-full bg-slate-900 p-10">
<TitleSection
      :spanText="'Service We Offer'"
      :headingText="'Discover Your Next Ride'"
      :classes="'items-center text-white'"
    />

  </Section>

  <Footer />
</template>
