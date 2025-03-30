<script setup>
import { computed } from "vue";

const props = defineProps({
  classSig: {
    type: String,
    required: true,
  },
  classPrev: {
    type: String,
    required: true,
  },
  borderColor: {
    type: String,
    default: "border-blue-500",
  },
  hoverColor: {
    type: String,
    default: "hover:bg-blue-100",
  },
  svgColor: {
    type: String,
    default: "#515FD5",
  },
});

// Clases computadas para limpiar el template
const buttonClasses = (customClass) =>
  `${customClass} transform rotate-45 size-11 cursor-pointer border-2 flex items-center justify-center group transition-colors duration-200 ${props.borderColor} ${
    props.hoverColor !== "bg-transparent" ? props.hoverColor : ""
  }`;
</script>

<template>
  <button :class="buttonClasses(classPrev)">
    <span class="transform -rotate-45">
      <svg
        width="120px"
        height="26px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_iconCarrier">
          <path d="M6 0H5L0 5L5 10H6V6H12V15H14V4H6V0Z" :fill="svgColor"></path>
        </g>
      </svg>
    </span>
  </button>

  <button :class="buttonClasses(classSig)">
    <span class="transform -rotate-45">
      <svg
        width="120px"
        height="26px"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :style="{ transform: 'scaleX(-1)' }"
      >
        <g id="SVGRepo_iconCarrier">
          <path d="M6 0H5L0 5L5 10H6V6H12V15H14V4H6V0Z" :fill="svgColor"></path>
        </g>
      </svg>
    </span>
  </button>
</template>
