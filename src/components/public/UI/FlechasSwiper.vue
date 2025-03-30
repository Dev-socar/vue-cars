<script setup>
defineProps({
  classSig: {
    type: String,
    required: true,
  },
  classPrev: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <button
    :class="`${classPrev} transform rotate-45 size-11 cursor-pointer border-2 border-blue-500 flex items-center justify-center group hover:bg-blue-100 transition-colors duration-200`"
  >
    <span class="transform -rotate-45 text-blue-500">
      <svg
        width="120px"
        height="26px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_iconCarrier">
          <path d="M6 0H5L0 5L5 10H6V6H12V15H14V4H6V0Z" fill="#515FD5"></path>
        </g>
      </svg>
    </span>
  </button>
  
  <button
    :class="`${classSig} transform rotate-45 size-11 cursor-pointer border-2 border-blue-500 flex items-center justify-center group hover:bg-blue-100 transition-colors duration-200`"
  >
    <span class="transform -rotate-45 text-blue-500">
      <svg
        width="120px"
        height="26px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        transform="matrix(-1, 0, 0, 1, 0, 0)"
      >
        <g id="SVGRepo_iconCarrier">
          <path d="M6 0H5L0 5L5 10H6V6H12V15H14V4H6V0Z" fill="#515FD5"></path>
        </g>
      </svg>
    </span>
  </button>
</template>
