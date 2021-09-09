<template>
  <div class="progress">
    <p class="progress__text">{{ progress }}</p>

    <svg
        width="5.208vw"
        height="0.625vw"
        viewBox="0 0 99 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M95 0H99L88 12H84L95 0Z" fill="#F79A2D"/>
      <path d="M59 0H63L52 12H48L59 0Z" fill="#F79A2D"/>
      <path d="M77 0H81L70 12H66L77 0Z" fill="#F79A2D"/>
      <path d="M41 0H45L34 12H30L41 0Z" fill="#F79A2D" fill-opacity="0.2"/>
      <path d="M11 0H15L4 12H0L11 0Z" fill="#F79A2D" fill-opacity="0.2"/>
      <path d="M89 0H93L82 12H78L89 0Z" fill="#F79A2D"/>
      <path d="M53 0H57L46 12H42L53 0Z" fill="#F79A2D"/>
      <path d="M23 0H27L16 12H12L23 0Z" fill="#F79A2D" fill-opacity="0.2"/>
      <path d="M71 0H75L64 12H60L71 0Z" fill="#F79A2D"/>
      <path d="M35 0H39L28 12H24L35 0Z" fill="#F79A2D" fill-opacity="0.2"/>
      <path d="M83 0H87L76 12H72L83 0Z" fill="#F79A2D"/>
      <path d="M47 0H51L40 12H36L47 0Z" fill="#F79A2D" fill-opacity="0.2"/>
      <path d="M17 0H21L10 12H6L17 0Z" fill="#F79A2D" fill-opacity="0.2"/>
      <path d="M65 0H69L58 12H54L65 0Z" fill="#F79A2D"/>
      <path d="M29 0H33L22 12H18L29 0Z" fill="#F79A2D" fill-opacity="0.2"/>
    </svg>


  </div>
</template>

<script>
export default {
  name: "Progress",
  props: ["progress"],
};
</script>

<style lang="scss">
.progress {
  position: absolute;
  z-index: 1;
}

.progress__text {
  font-weight: 700;
  font-size: 0.521vw;
  line-height: 1.042vw;
  color: #fb9b2b;
  padding-right: 0.5vw;
}
</style>
