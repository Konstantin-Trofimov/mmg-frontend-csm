<template>
  <main class="layout">
    <div class="prt-block" id="prt_click" v-on:click="back_click">
      <router-link :to="{ name: 'homepage' }">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="test"
        >
          <path
            d="M51.5 38V38.2071L51.3536 38.3536L38.3536 51.3536L38.2071 51.5H38H1H0.5V51V11V10.7929L0.646446 10.6464L10.6464 0.646447L10.7929 0.5H11H51H51.5V1V38Z"
            stroke="#217AFF"
            stroke-opacity="0.4"
          />
          <path
            d="M32.6657 17C35.2923 18.9086 37 22.0048 37 25.5C37 31.299 32.299 36 26.5 36C20.701 36 16 31.299 16 25.5C16 22.0048 17.7077 18.9086 20.3343 17"
            stroke="#217AFF"
            stroke-width="2"
          />
          <path d="M26.5 13V27" stroke="#217AFF" stroke-width="2" />
        </svg>
      </router-link>
    </div>

    <div class="video">
      <video autoplay="" loop="" muted="" playsinline="">
        <source
          src="../assets/img/video.mp4"
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
        Тег video не поддерживается вашим браузером.
      </video>
    </div>
    <img
      @click="handler"
      :src="urlImg"
      alt=""
      class="test-img portret__foto"
      height="95%"
      width="auto"
    />
    <div class="portret__box"></div>
    <div class="portret__title">
      Вишняков Алексей Семенович<br />Предприниматель, Основатель РЭУ
    </div>
  </main>
</template>

<script>
export default {
  name: "TestP",
  data() {
    return {
      activeGif: false,
      urlImg: "../assets/img/gif1.png",
    };
  },
  components: {},
  methods: {
    handler() {
      this.activeGif = !this.activeGif;

      if (this.activeGif) {
        this.urlImg = "../assets/img/gif1.gif";
      } else {
        this.urlImg = "../assets/img/gif1.png";
      }
    },

    back_click: function () {
      this.connection.send("back_click");
    },
  },
  created() {
    const ws_url = "ws://195.211.102.43:8999";
    this.connection = new WebSocket(ws_url);

    this.connection.onerror = (error) => {
      console.log(error);
    };
  },
};
</script>

<style lang="scss">
.test-img {
  z-index: 999;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.portret__box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 80vh;
  width: 27vw;
  z-index: 1000;
  -webkit-box-shadow: inset 0 0 100px #000;
  -moz-box-shadow: inset 0 0 100px #000;
  box-shadow: inset 0 0 100px #000;
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

.portret__foto {
  height: 80vh;
  //width: 27vw;
  top: 41%;
}

.portret__title {
  text-align: center;
  font-size: 3.45vh;
  line-height: 3.9vh;
  color: #1b1b1b;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 90%;
  z-index: 9;
}
</style>
