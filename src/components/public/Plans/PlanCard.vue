<script setup>
defineProps({
    activeTab: {
        type: String
    }
})
</script>

<template>
    <div class="mx-auto pb-20">
      <!-- Monthly Plans -->
      <transition
        enter-active-class="transition-opacity duration-500 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-500 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        mode="out-in"
      >
        <div v-if="activeTab === 'monthly'" key="monthly" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div class="px-6 py-8 border-b border-gray-200">
              <h3 class="text-2xl font-bold  text-gray-900">Basic Plan</h3>
              <div class="mt-4 ">
                <span class="text-6xl font-extrabold text-gray-900">$99.99</span>
                <span class="text-lg ml-1 text-gray-600">/mes</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Curae varius velit tellus laoreet consequat nam consectetur pharetra magna.</p>
              <h4 class="font-bold text-lg mb-4 text-gray-900">Plan Features:</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lowest Monthly Rate</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Extra Charge For More Miles</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Economy Or Compact Cars</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic Coverage (Oil Changes, Etc.)</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic Or Optional Insurance</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-gray-500">5+ more Features</span>
                </li>
              </ul>
              <p class="mt-6 text-sm text-gray-500 italic">*1000kms (or) 1 month recommended</p>
              <button class="mt-8 w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
                Subscribe Basic Plan
              </button>
            </div>
          </div>

          <!-- Standard Monthly Plan -->
          <div class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div class="px-6 py-8 border-b border-gray-200 relative">
              <span class="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg text-gray-900">POPULAR</span>
              <h3 class="text-2xl font-bold  text-gray-900">Standard Plan</h3>
              <div class="mt-4 ">
                <span class="text-6xl font-extrabold text-gray-900">$149.99</span>
                <span class="text-lg ml-1 text-gray-600">/mes</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Praesent commodo cursus magna, vel scelerisque nisl consectetur et dignissim.</p>
              <h4 class="font-bold text-lg mb-4 text-gray-900">Plan Features:</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Competitive Monthly Rate</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>2000km Included</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Mid-size or SUV Cars</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full Coverage Maintenance</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Comprehensive Insurance</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 Roadside Assistance</span>
                </li>
              </ul>
              <p class="mt-6 text-sm text-gray-500 italic">*2000kms (or) 2 months recommended</p>
              <button class="mt-8 w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
                Subscribe Standard Plan
              </button>
            </div>
          </div>

          <!-- Premium Monthly Plan -->
          <div class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div class="px-6 py-8 border-b border-gray-200">
              <h3 class="text-2xl font-bold  text-gray-900">Premium Plan</h3>
              <div class="mt-4 ">
                <span class="text-6xl font-extrabold text-gray-900">$199.99</span>
                <span class="text-lg ml-1 text-gray-600">/mes</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Nullam quis risus eget urna mollis ornare vel eu leo consectetur adipiscing elit.</p>
              <h4 class="font-bold text-lg mb-4 text-gray-900">Plan Features:</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Monthly Miles</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Luxury or Premium Cars</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Premium Maintenance Package</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full Coverage Insurance</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority Customer Support</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Vehicle Delivery & Pickup</span>
                </li>
              </ul>
              <p class="mt-6 text-sm text-gray-500 italic">*Unlimited kms (or) 3 months recommended</p>
              <button class="mt-8 w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
                Subscribe Premium Plan
              </button>
            </div>
          </div>
        </div>

        <!-- Annual Plans -->
        <div v-else key="annual" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Basic Annual Plan -->
          <div class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div class="px-6 py-8 border-b border-gray-200">
              <h3 class="text-2xl font-bold  text-gray-900">Basic Annual</h3>
              <div class="mt-4 ">
                <span class="text-6xl font-extrabold text-gray-900">$999.99</span>
                <span class="text-lg ml-1 text-gray-600">/año</span>
              </div>
              <div class="mt-2 ">
                <span class="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-700">Ahorra $199.89</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Curae varius velit tellus laoreet consequat nam consectetur pharetra magna.</p>
              <h4 class="font-bold text-lg mb-4 text-gray-900">Plan Features:</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Lowest Annual Rate</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Extra Charge For More Miles</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Economy Or Compact Cars</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic Coverage (Oil Changes, Etc.)</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Basic Or Optional Insurance</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Annual Maintenance Check</span>
                </li>
              </ul>
              <p class="mt-6 text-sm text-gray-500 italic">*12000kms (or) 12 months</p>
              <button class="mt-8 w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
                Subscribe Basic Annual
              </button>
            </div>
          </div>

          <!-- Standard Annual Plan -->
          <div class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div class="px-6 py-8 border-b border-gray-200 relative">
              <span class="absolute top-0 right-0 bg-yellow-400 text-xs font-bold px-3 py-1 rounded-bl-lg text-gray-900">MEJOR VALOR</span>
              <h3 class="text-2xl font-bold  text-gray-900">Standard Annual</h3>
              <div class="mt-4 ">
                <span class="text-6xl font-extrabold text-gray-900">$1499.99</span>
                <span class="text-lg ml-1 text-gray-600">/año</span>
              </div>
              <div class="mt-2 ">
                <span class="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-700">Ahorra $299.89</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Praesent commodo cursus magna, vel scelerisque nisl consectetur et dignissim.</p>
              <h4 class="font-bold text-lg mb-4 text-gray-900">Plan Features:</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Competitive Annual Rate</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>25000km Included</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Mid-size or SUV Cars</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full Coverage Maintenance</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Comprehensive Insurance</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>24/7 Roadside Assistance</span>
                </li>
              </ul>
              <p class="mt-6 text-sm text-gray-500 italic">*25000kms (or) 12 months</p>
              <button class="mt-8 w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
                Subscribe Standard Annual
              </button>
            </div>
          </div>

          <!-- Premium Annual Plan -->
          <div class="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
            <div class="px-6 py-8 border-b border-gray-200">
              <h3 class="text-2xl font-bold  text-gray-900">Premium Annual</h3>
              <div class="mt-4 ">
                <span class="text-6xl font-extrabold text-gray-900">$1999.99</span>
                <span class="text-lg ml-1 text-gray-600">/año</span>
              </div>
              <div class="mt-2 ">
                <span class="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-700">Ahorra $399.89</span>
              </div>
            </div>
            <div class="p-6">
              <p class="text-gray-600 mb-6">Nullam quis risus eget urna mollis ornare vel eu leo consectetur adipiscing elit.</p>
              <h4 class="font-bold text-lg mb-4 text-gray-900">Plan Features:</h4>
              <ul class="space-y-3">
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Unlimited Annual Miles</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Luxury or Premium Cars</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Premium Maintenance Package</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Full Coverage Insurance</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Priority Customer Support</span>
                </li>
                <li class="flex items-start">
                  <svg class="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Vehicle Delivery & Pickup</span>
                </li>
              </ul>
              <p class="mt-6 text-sm text-gray-500 italic">*Unlimited kms (or) 12 months</p>
              <button class="mt-8 w-full bg-blue-500 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300">
                Subscribe Premium Annual
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  
</template>


