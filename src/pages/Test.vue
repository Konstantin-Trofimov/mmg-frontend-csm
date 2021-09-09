<template>
	<main class="layout">
		<router-link :to="{name: 'homepage'}">
			<svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="test">
				<path d="M51.5 38V38.2071L51.3536 38.3536L38.3536 51.3536L38.2071 51.5H38H1H0.5V51V11V10.7929L0.646446 10.6464L10.6464 0.646447L10.7929 0.5H11H51H51.5V1V38Z" stroke="#217AFF" stroke-opacity="0.4"/>
				<path d="M32.6657 17C35.2923 18.9086 37 22.0048 37 25.5C37 31.299 32.299 36 26.5 36C20.701 36 16 31.299 16 25.5C16 22.0048 17.7077 18.9086 20.3343 17" stroke="#217AFF" stroke-width="2"/>
				<path d="M26.5 13V27" stroke="#217AFF" stroke-width="2"/>
			</svg>
		</router-link>

    <div class="video">
      <video autoplay="" loop="" muted="" playsinline="">
          <source src="../assets/img/video.mp4" type="video/mp4; codecs=&quot;avc1.42E01E, mp4a.40.2&quot;">
          Тег video не поддерживается вашим браузером.
      </video>
    </div>

    <img src="@/assets/img/name.svg" alt="" class="test-img" width="400">
	</main>
</template>

<script>
export default {
	name: 'Test',
  data() {
    return {
     
    }
  },
	components: {
	},
  methods: {
  }
}
</script>

<style lang="scss">
.test {
	position: absolute;
	left: 45px;
	top: 45px;
	cursor: pointer;
  z-index: 99;
}

.test-img {
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.video {
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;

  video {
    width: 100%;
    display: block;
    height: 100%;
    object-fit: cover;
  }
}
</style>
