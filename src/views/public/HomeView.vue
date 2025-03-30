<script setup>
import Header from "@/components/public/Header/Header.vue";
import TitleSection from "@/components/public/UI/TitleSection.vue";
import CarCard from "@/components/public/Car/CarCard.vue";
import CarBrandsCard from "@/components/public/Car/CarBrandsCard.vue";
import Footer from "@/components/public/Footer/Footer.vue";
import FlechasSwiper from "@/components/public/UI/FlechasSwiper.vue";
import Section from "@/components/public/UI/Section.vue";
import CarSlide from "@/components/public/Car/CarSlide.vue";
import TagService from "@/components/public/Car/TagService.vue";
import ServiceCard from "@/components/public/Car/ServiceCard.vue";

import { servicesRide, services, vehiclesBrand } from "@/data/index";
</script>
<template>
  <Header />
  <main class="w-[95%] lg:w-[80%] mt-20 lg:mt-50 mx-auto relative" id="vehicles">
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

    <div class="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      <CarCard v-for="Car in 4" :key="Car" />
    </div>
  </main>

  <Section class="w-[95%] lg:w-[80%]">
    <TitleSection
      :spanText="'Explore By Brand'"
      :headingText="'Our Highlighted Vehicles'"
      :classes="'items-center'"
    />
    <div class="py-10 grid md:grid-cols-2 gap-10 lg:grid-cols-5">
      <CarBrandsCard
        v-for="brand in vehiclesBrand"
        :key="brand.tag"
        :brand="brand"
      />
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
          <CarSlide :imagen="'/imagenes/vehicle.png'" />
        </swiper-slide>
        <swiper-slide lazy="true">
          <CarSlide :imagen="'/imagenes/vehicle-02.png'" />
        </swiper-slide>
        <swiper-slide lazy="true">
          <CarSlide :imagen="'/imagenes/vehicle.png'" />
        </swiper-slide>
        <swiper-slide lazy="true">
          <CarSlide :imagen="'/imagenes/vehicle-02.png'" />
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

  <Section class="w-[95%] lg:w-[80%]" id="services">
    <TitleSection
      :spanText="'Expert Car Care'"
      :headingText="'Reliable Service For Every Ride'"
      :classes="'items-center text-center lg:text-left'"
    />

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 mx-auto">
      <TagService
        v-for="service in servicesRide"
        :key="service.tag"
        :service="service"
      />
    </div>
  </Section>

  <Section class="w-full bg-slate-900 px-10 relative py-30">
    <TitleSection
      :spanText="'Service We Offer'"
      :headingText="'Discover Your Next Ride'"
      :classes="'items-center text-white'"
    />
    <div class="w-[95%] lg:w-[80%] mx-auto mt-10">
      <swiper-container
        class="mt-5"
        slides-per-view="1"
        loop="true"
        space-between="25"
        :autoplay="{ delay: 3000, disableOnInteraction: false }"
        :navigation="{
          nextEl: '.services-sig',
          prevEl: '.services-ant',
        }"
        :breakpoints="{ 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }"
      >
        <swiper-slide v-for="service in services" :key="service.tag">
          <ServiceCard :service="service" />
        </swiper-slide>
      </swiper-container>
      <div
        class="flex lg:absolute mt-7 gap-10 justify-center w-full lg:justify-between lg:items-center lg:inset-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:px-20"
      >
        <FlechasSwiper
          classSig="services-sig"
          classPrev="services-ant"
          borderColor="border-white"
          hoverColor="bg-transparent"
          svgColor="#FFF"
        />
      </div>
    </div>
  </Section>

  <Footer />
</template>
