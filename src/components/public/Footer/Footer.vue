<script setup>
import { useYear } from "@/composable/useYear";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faSnapchat,
} from "@fortawesome/free-brands-svg-icons";


const { year } = useYear();
</script>

<template>
  <footer class="bg-slate-900 text-white px-8 pt-20 pb-5 mt-10 bg-[url('/imagenes/footer-overlay.png')] bg-[60%_auto] bg-center bg-no-repeat">
    <div class="grid gap-10 lg:grid-cols-3 lg:gap-12">
      <div class="lg:col-span-1">
        <h2 class="text-3xl font-bold lg:text-5xl">Vue Cars</h2>
        <p class="mt-4 text-gray-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam
          doloribus possimus illum beatae ullam id similique quisquam error
          minus? Molestias et magni ullam quod distinctio nulla veniam saepe
          omnis! Minima.
        </p>
        <div class="mt-6">
          <h3 class="font-semibold text-2xl">Newsletter</h3>
          <form class="mt-2">
            <div class="flex">
              <input
                type="email"
                placeholder="Enter your email"
                class="p-2 rounded-l w-full border border-gray-500 text-white"
                aria-label="Enter your email"
              />
              <button type="submit" class="bg-blue-600 text-white px-4 py-2 rounded-r cursor-pointer">
                Subscribe
              </button>
            </div>
            <div class="mt-2 flex items-center">
              <input type="checkbox" id="terms" class="mr-2" />
              <label for="terms" class="text-gray-300 text-sm"
                >I agree to the terms and conditions</label
              >
            </div>
          </form>
        </div>
      </div>
      <div class="lg:col-span-2 grid lg:grid-cols-3 gap-8">
        <div>
          <h3 class="font-semibold text-2xl">My Account</h3>
          <ul class="space-y-2 mt-2">
            <li>
              <a href="#" class="text-gray-300 hover:text-white"
                >My Dashboard</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">My Builds</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white"
                >My Inventory</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">My Searches</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">My Garage</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-2xl">Quick Links</h3>
          <ul class="space-y-2 mt-2">
            <li><a href="#" class="text-gray-300 hover:text-white">Home</a></li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">About Us</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">Services</a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white">Contact Us</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-2xl">Information</h3>
          <ul class="space-y-2 mt-2">
            <li>
              <a href="#" class="text-gray-300 hover:text-white"
                >Privacy Policy</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white"
                >Terms of Service</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white"
                >Refund Policy</a
              >
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white"
                >Shipping Policy</a
              >
            </li>
          </ul>
        </div>
        <div>
          <h3 class="font-semibold text-2xl">Address</h3>
          <ul class="mt-2 text-gray-300">
            <li>
              No: 58 A, East Madison Street, <br />
              New York, NY 10002, USA
            </li>
          </ul>
          <p class="mt-2">
            Mail:
            <a href="mailto:#" class="text-blue-400">Support@correo.com</a>
          </p>
          <p>
            Phone: <a href="tel:#" class="text-blue-400">0000 1234 56789</a>
          </p>
        </div>
        <div>
          <h3 class="font-semibold text-2xl">Car Attachment</h3>
          <a href="tel:#" class="text-blue-400 my-2 inline-block">0000 1234 56789</a>
          <div>
            <h3 class="font-semibold text-2xl mt-2">Follow Us</h3>
            <div class="flex space-x-4 mt-2">
              <a href="#" class="bg-blue-700 p-2 rounded-full flex justify-center items-center text-gray-300 hover:text-white">
                <font-awesome-icon :icon="faFacebook" class="text-2xl" />
              </a>
              <a href="#" class="bg-blue-700 p-2 rounded-full flex justify-center items-center text-gray-300 hover:text-white">
                <font-awesome-icon :icon="faInstagram" class="text-2xl" />
              </a>
              <a href="#" class="bg-blue-700 p-2 rounded-full flex justify-center items-center text-gray-300 hover:text-white">
                <font-awesome-icon :icon="faSnapchat" class="text-2xl" />
              </a>
              <a href="#" class="bg-blue-700 p-2 rounded-full flex justify-center items-center text-gray-300 hover:text-white">
                <font-awesome-icon :icon="faYoutube" class="text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="mt-10 border-t border-blue-600 pt-5 flex flex-col gap-2 items-start lg:flex-row  lg:justify-between lg:items-center"
    >
      <p class="text-center text-gray-300">
        &copy; {{ year }} Vue Cars. All rights reserved.
      </p>
      <p class="text-center text-gray-300">
        Developed by <a href="#" class="text-blue-400">Omar Solis</a>
      </p>
    </div>
  </footer>
</template>
