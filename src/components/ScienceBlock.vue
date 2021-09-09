<template>
  <div class="science-block" id="science_click" v-on:click="sc_click">
    <svg class="science-block__bg" width="21.510vw" height="19.375vw">
      <use href="@/assets/img/sprite.svg#science-container"></use>
    </svg>

    <div class="science-block__top">
      <div class="science-block__cols">
        <div class="science-block__col">
          <p class="science-block__title">Научная деятельность</p>
          <p class="science-block__subtitle">Выполнение плана</p>
          <p class="science-block__percent">30,72%</p>
          <svg
              class="science-block__bar"
              width="11.32vw"
              height="1.6vw"
              viewBox="0 0 163 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.69088 0.0908813H-2.86102e-05L18.4 23H25.0909L6.69088 0.0908813Z" fill="#A7EB17"/>
            <path d="M65.6 0.0908813H58.9091L77.3091 23H84L65.6 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M36.1455 0.0908813H29.4546L47.8546 23H54.5455L36.1455 0.0908813Z" fill="#A7EB17"/>
            <path d="M95.0545 0.0908813H88.3636L106.764 23H113.455L95.0545 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M144.145 0.0908813H137.455L155.855 23H162.545L144.145 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M16.5091 0.0908813H9.81821L28.2182 23H34.9091L16.5091 0.0908813Z" fill="#A7EB17"/>
            <path d="M75.4182 0.0908813H68.7273L87.1273 23H93.8182L75.4182 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M124.509 0.0908813H117.818L136.218 23H142.909L124.509 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M45.9636 0.0908813H39.2727L57.6727 23H64.3636L45.9636 0.0908813Z" fill="#A7EB17"/>
            <path d="M104.873 0.0908813H98.1818L116.582 23H123.273L104.873 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M26.3273 0.0908813H19.6364L38.0364 23H44.7273L26.3273 0.0908813Z" fill="#A7EB17"/>
            <path d="M85.2364 0.0908813H78.5454L96.9454 23H103.636L85.2364 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M134.327 0.0908813H127.636L146.036 23H152.727L134.327 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M55.7818 0.0908813H49.0909L67.4909 23H74.1818L55.7818 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
            <path d="M114.691 0.0908813H108L126.4 23H133.091L114.691 0.0908813Z" fill="#A7EB17" fill-opacity="0.2"/>
          </svg>

          <p class="science-block__text text-right">
            <span>503 760,6 тыс.</span>
          </p>
        </div>

        <div class="science-block__col">
          <div class="science-block__list">
            <div class="science-block__item">
              <div class="science-block__inf">
                <svg
                    width="0.833vw"
                    height="0.833vw"
                    class="science-block__icon"
                >
                  <use href="@/assets//img/sprite.svg#block-graph-icon4"></use>
                </svg>

                <p class="science-block__text">
                  Поступления от НИР <br />
                  за текущий год <br />
                  <span>154 767,80 тыс.</span>
                </p>
              </div>
            </div>

            <div class="science-block__item">
              <div class="science-block__inf">
                <svg
                    width="0.833vw"
                    height="0.833vw"
                    class="science-block__icon"
                >
                  <use href="@/assets//img/sprite.svg#block-graph-icon5"></use>
                </svg>

                <p class="science-block__text">
                  Ожидаемые поступления <br />
                  от НИР в текущем году <br />
                  <span>54 830,67 тыс.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="science-block__bottom">
      <div class="science-block__rows">
        <div class="science-block__btns">
          <button class="science-btn is--active">
            <svg class="science-btn__active">
              <use href="@/assets/img/sprite.svg#science-btn-icon"></use>
            </svg>

            <svg class="science-btn__icon" width="0.521vw" height="0.521vw">
              <use href="@/assets/img/sprite.svg#triangle-icon"></use>
            </svg>
            <span class="science-btn__text">Публикации WoS</span>
          </button>

          <button class="science-btn">
            <svg class="science-btn__icon" width="0.521vw" height="0.521vw">
              <use href="@/assets/img/sprite.svg#triangle-icon"></use>
            </svg>
            <span class="science-btn__text">Публикации Scopus</span>
          </button>

          <button class="science-btn">
            <svg class="science-btn__icon" width="0.521vw" height="0.521vw">
              <use href="@/assets/img/sprite.svg#triangle-icon"></use>
            </svg>
            <span class="science-btn__text">Публикации Q1</span>
          </button>

          <button class="science-btn">
            <svg class="science-btn__icon" width="0.521vw" height="0.521vw">
              <use href="@/assets/img/sprite.svg#triangle-icon"></use>
            </svg>
            <span class="science-btn__text">Публикации Q2</span>
          </button>
        </div>

        <div class="science-block__graph">
          <svg
              width="12.083vw"
              height="9vw"
              viewBox="0 0 242 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="95" width="204" height="1" fill="#B2CEF6"/>
            <rect x="14" y="78" width="22" height="17" fill="#217AFF"/>
            <rect x="46" y="54" width="22" height="41" fill="#217AFF"/>
            <rect x="76" y="56" width="22" height="39" fill="#217AFF"/>
            <rect x="108" y="37" width="22" height="58" fill="#217AFF"/>
            <rect x="141" y="61" width="22" height="34" fill="#217AFF"/>
            <rect x="172" y="33" width="22" height="62" fill="#217AFF"/>
            <rect x="21.7071" y="95.5356" width="4" height="4" transform="rotate(-45 21.7071 95.5356)" fill="white" stroke="#B2CEF6"/>
            <rect x="53.7071" y="95.5356" width="4" height="4" transform="rotate(-45 53.7071 95.5356)" fill="white" stroke="#B2CEF6"/>
            <rect x="83.7071" y="95.5356" width="4" height="4" transform="rotate(-45 83.7071 95.5356)" fill="white" stroke="#B2CEF6"/>
            <rect x="116.707" y="95.5356" width="4" height="4" transform="rotate(-45 116.707 95.5356)" fill="white" stroke="#B2CEF6"/>
            <rect x="148.707" y="95.5356" width="4" height="4" transform="rotate(-45 148.707 95.5356)" fill="white" stroke="#B2CEF6"/>
            <rect x="180.707" y="95.5356" width="4" height="4" transform="rotate(-45 180.707 95.5356)" fill="white" stroke="#B2CEF6"/>
            <g filter="url(#filter0_d)">
              <path d="M232 22.64V1H191.111L184 8.2V32H222.756L232 22.64Z" fill="#112054"/>
              <path d="M232.5 22.64V22.8453L232.356 22.9914L223.111 32.3514L222.964 32.5H222.756H184H183.5V32V8.2V7.99471L183.644 7.84865L190.755 0.648649L190.902 0.5H191.111H232H232.5V1V22.64Z" stroke="#217AFF"/>
            </g>
            <path d="M203.51 24.9V26H198.35V25.13L201.13 22.49C201.443 22.19 201.653 21.93 201.76 21.71C201.873 21.4833 201.93 21.26 201.93 21.04C201.93 20.7133 201.82 20.4633 201.6 20.29C201.38 20.1167 201.057 20.03 200.63 20.03C199.917 20.03 199.37 20.2733 198.99 20.76L198.08 20.06C198.353 19.6933 198.72 19.41 199.18 19.21C199.647 19.0033 200.167 18.9 200.74 18.9C201.5 18.9 202.107 19.08 202.56 19.44C203.013 19.8 203.24 20.29 203.24 20.91C203.24 21.29 203.16 21.6467 203 21.98C202.84 22.3133 202.533 22.6933 202.08 23.12L200.21 24.9H203.51ZM208.8 22.32C209.167 22.4867 209.447 22.7133 209.64 23C209.84 23.28 209.94 23.61 209.94 23.99C209.94 24.4167 209.82 24.79 209.58 25.11C209.347 25.43 209.014 25.6767 208.58 25.85C208.147 26.0167 207.644 26.1 207.07 26.1C206.497 26.1 205.994 26.0167 205.56 25.85C205.134 25.6767 204.804 25.43 204.57 25.11C204.337 24.79 204.22 24.4167 204.22 23.99C204.22 23.61 204.317 23.28 204.51 23C204.704 22.7133 204.98 22.4867 205.34 22.32C205.06 22.1667 204.844 21.9667 204.69 21.72C204.544 21.4667 204.47 21.1767 204.47 20.85C204.47 20.4567 204.577 20.1133 204.79 19.82C205.01 19.5267 205.317 19.3 205.71 19.14C206.104 18.98 206.557 18.9 207.07 18.9C207.59 18.9 208.047 18.98 208.44 19.14C208.834 19.3 209.14 19.5267 209.36 19.82C209.58 20.1133 209.69 20.4567 209.69 20.85C209.69 21.1767 209.614 21.4633 209.46 21.71C209.307 21.9567 209.087 22.16 208.8 22.32ZM207.07 19.92C206.664 19.92 206.34 20.0067 206.1 20.18C205.867 20.3533 205.75 20.5967 205.75 20.91C205.75 21.21 205.867 21.45 206.1 21.63C206.34 21.8033 206.664 21.89 207.07 21.89C207.484 21.89 207.81 21.8033 208.05 21.63C208.29 21.45 208.41 21.21 208.41 20.91C208.41 20.5967 208.287 20.3533 208.04 20.18C207.8 20.0067 207.477 19.92 207.07 19.92ZM207.07 25.08C207.55 25.08 207.93 24.98 208.21 24.78C208.49 24.58 208.63 24.3033 208.63 23.95C208.63 23.6033 208.49 23.33 208.21 23.13C207.93 22.93 207.55 22.83 207.07 22.83C206.59 22.83 206.214 22.93 205.94 23.13C205.667 23.33 205.53 23.6033 205.53 23.95C205.53 24.3033 205.667 24.58 205.94 24.78C206.214 24.98 206.59 25.08 207.07 25.08ZM212.974 21.71C213.96 21.71 214.69 21.9033 215.164 22.29C215.637 22.67 215.874 23.19 215.874 23.85C215.874 24.27 215.77 24.65 215.564 24.99C215.357 25.33 215.047 25.6 214.634 25.8C214.22 26 213.71 26.1 213.104 26.1C212.604 26.1 212.12 26.03 211.654 25.89C211.187 25.7433 210.794 25.5433 210.474 25.29L211.024 24.28C211.284 24.4933 211.594 24.6633 211.954 24.79C212.32 24.91 212.697 24.97 213.084 24.97C213.544 24.97 213.904 24.8767 214.164 24.69C214.43 24.4967 214.564 24.2333 214.564 23.9C214.564 23.54 214.42 23.27 214.134 23.09C213.854 22.9033 213.37 22.81 212.684 22.81H210.994L211.354 19H215.464V20.09H212.454L212.304 21.71H212.974Z" fill="white"/>
            <path d="M195.82 8.7C196.507 8.7 197.033 8.87333 197.4 9.22C197.767 9.56 197.95 10.0667 197.95 10.74V14H197.27V13.18C197.11 13.4533 196.873 13.6667 196.56 13.82C196.253 13.9733 195.887 14.05 195.46 14.05C194.873 14.05 194.407 13.91 194.06 13.63C193.713 13.35 193.54 12.98 193.54 12.52C193.54 12.0733 193.7 11.7133 194.02 11.44C194.347 11.1667 194.863 11.03 195.57 11.03H197.24V10.71C197.24 10.2567 197.113 9.91333 196.86 9.68C196.607 9.44 196.237 9.32 195.75 9.32C195.417 9.32 195.097 9.37667 194.79 9.49C194.483 9.59667 194.22 9.74667 194 9.94L193.68 9.41C193.947 9.18333 194.267 9.01 194.64 8.89C195.013 8.76333 195.407 8.7 195.82 8.7ZM195.57 13.49C195.97 13.49 196.313 13.4 196.6 13.22C196.887 13.0333 197.1 12.7667 197.24 12.42V11.56H195.59C194.69 11.56 194.24 11.8733 194.24 12.5C194.24 12.8067 194.357 13.05 194.59 13.23C194.823 13.4033 195.15 13.49 195.57 13.49ZM203.19 11.28C203.903 11.4467 204.26 11.8767 204.26 12.57C204.26 13.03 204.09 13.3833 203.75 13.63C203.41 13.8767 202.903 14 202.23 14H199.84V8.74H202.16C202.76 8.74 203.23 8.85667 203.57 9.09C203.91 9.32333 204.08 9.65667 204.08 10.09C204.08 10.3767 204 10.6233 203.84 10.83C203.687 11.03 203.47 11.18 203.19 11.28ZM200.53 11.08H202.11C202.517 11.08 202.827 11.0033 203.04 10.85C203.26 10.6967 203.37 10.4733 203.37 10.18C203.37 9.88667 203.26 9.66667 203.04 9.52C202.827 9.37333 202.517 9.3 202.11 9.3H200.53V11.08ZM202.2 13.44C202.653 13.44 202.993 13.3667 203.22 13.22C203.447 13.0733 203.56 12.8433 203.56 12.53C203.56 12.2167 203.457 11.9867 203.25 11.84C203.043 11.6867 202.717 11.61 202.27 11.61H200.53V13.44H202.2ZM209.644 9.37H206.634V14H205.924V8.74H209.644V9.37ZM215.16 8.74L212.53 14.63C212.316 15.1233 212.07 15.4733 211.79 15.68C211.51 15.8867 211.173 15.99 210.78 15.99C210.526 15.99 210.29 15.95 210.07 15.87C209.85 15.79 209.66 15.67 209.5 15.51L209.83 14.98C210.096 15.2467 210.416 15.38 210.79 15.38C211.03 15.38 211.233 15.3133 211.4 15.18C211.573 15.0467 211.733 14.82 211.88 14.5L212.11 13.99L209.76 8.74H210.5L212.48 13.21L214.46 8.74H215.16ZM218.319 14.05C217.799 14.05 217.333 13.9367 216.919 13.71C216.513 13.4833 216.193 13.1667 215.959 12.76C215.726 12.3467 215.609 11.8833 215.609 11.37C215.609 10.8567 215.726 10.3967 215.959 9.99C216.193 9.58333 216.513 9.26667 216.919 9.04C217.333 8.81333 217.799 8.7 218.319 8.7C218.773 8.7 219.176 8.79 219.529 8.97C219.889 9.14333 220.173 9.4 220.379 9.74L219.849 10.1C219.676 9.84 219.456 9.64667 219.189 9.52C218.923 9.38667 218.633 9.32 218.319 9.32C217.939 9.32 217.596 9.40667 217.289 9.58C216.989 9.74667 216.753 9.98667 216.579 10.3C216.413 10.6133 216.329 10.97 216.329 11.37C216.329 11.7767 216.413 12.1367 216.579 12.45C216.753 12.7567 216.989 12.9967 217.289 13.17C217.596 13.3367 217.939 13.42 218.319 13.42C218.633 13.42 218.923 13.3567 219.189 13.23C219.456 13.1033 219.676 12.91 219.849 12.65L220.379 13.01C220.173 13.35 219.889 13.61 219.529 13.79C219.169 13.9633 218.766 14.05 218.319 14.05ZM225.356 9.37H223.366V14H222.656V9.37H220.666V8.74H225.356V9.37Z" fill="white"/>
            <defs>
              <filter id="filter0_d" x="183" y="0" width="59" height="43" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dx="5" dy="6"/>
                <feGaussianBlur stdDeviation="2"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.0897222 0 0 0 0 0.241933 0 0 0 0 0.633333 0 0 0 0.12 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>

    <CalendarDouble 
      :padding="{padding: '0 0.52vw 0.1vw'}"
      :lineHeightRight="{lineHeight: '1.05vw'}"
      />

  </div>
</template>

<script>
import CalendarDouble from "./widgets/calendar/CalendarDouble.vue";

export default {
  methods: {
    sc_click: function () {
      this.connection.send("sc_click");
    },
  },
  created() {
    const ws_url = "ws://195.211.102.43:8999";
    this.connection = new WebSocket(ws_url);

    this.connection.onerror = (error) => {
      console.log(error);
    };
  },

  components: {
    CalendarDouble
  },
};
</script>

<style lang="scss" scoped>
.science-block {
  position: relative;
  width: 21.51vw;
  height: 19.375vw;
  z-index: 0;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
}

.science-btn__active {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 8.292vw;
  height: 2.615vw;
}

.science-btn__icon {
  stroke: #d2daef;
  margin-right: 0.313vw;
  flex: 0 0 auto;
}

.science-btn__text {
  font-size: 0.66vw;
  letter-spacing: 0.03em;
  color: #fff;
}

.science-btn {
  display: flex;
  align-items: center;
  width: 7.8vw;
  height: 1.615vw;
  position: relative;
  padding-left: 0.5vw;

  &.is--active {
    .science-btn__icon {
      stroke: #217aff;
    }
  }
}

.science-block__percent {
  font-weight: 700;
  font-size: 0.781vw;
  line-height: 1.042vw;
  color: #f79a2d;
  margin-bottom: 0.208vw;
}

.science-block__rows {
  display: flex;
}

.science-block__btns {
  width: 9.292vw;
  margin-right: 0.521vw;
  flex: 0 0 auto;
  padding-left: 1.563vw;
}

.science-block__title {
  font-size: 0.938vw;
  line-height: 1.042vw;
  letter-spacing: 0.05em;
  margin-bottom: 1.1vw;
}

.science-block__cols {
  display: flex;
}

.science-block__col {
  padding-top: 1.354vw;
  padding-left: 1.302vw;
  padding-right: 1.302vw;

  &:first-of-type {
    width: 11.771vw;
  }

  &:last-of-type {
    width: 10.417vw;
    padding-left: 0;
  }
}

.science-block__inf {
  display: flex;
  align-items: flex-start;
}

.science-block__icon {
  position: relative;
  top: 0.2vw;
  margin-right: 0.104vw;
}

.science-block__text {
  font-size: 0.677vw;
  letter-spacing: 0.03em;
  color: #cdd6ee;

  span {
    display: block;
    margin-top: 0.313vw;
    color: #ffffff;
  }
}

.science-block__text.text-right {
  text-align: right;
}

.science-block__bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.science-block__list {
  padding-top: 0.5vw;
}

.science-block__item {
  margin-bottom: 0.625vw;
}

.science-block__bar {
  width: 9vw;
}

.science-block__top {
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 1.563vw;
    right: 1.563vw;
    bottom: 0;
    border: 1px dashed rgba(33, 122, 255, 0.2);
  }
}

.science-block__bottom {
  padding-top: 0.625vw;
}

.science-block__subtitle{
  font-size: 0.74vw;
}

</style>

