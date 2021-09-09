

<template>
  <div class="globus" v-on:click="int_activity_click">
    <svg class="globus__box" width="21.771vw" height="15.104vw">
      <use href="@/assets/img/sprite.svg#globus-box-icon"></use>
    </svg>

    <div class="globus__wrapper">
      <p class="globus__title">Международная деятельность</p>
      <div id="myearth" class="earth-container">
      </div>

      <div class="globus__text-contains">
        <div class="globus__text-row">
          <svg class="globus__icon" width="5vw" height="0.833vw">
            <use href="@/assets/img/sprite.svg#line1-icon"></use>
          </svg>
          <span>972</span>
          <p>
            иностранных <br />
            студентов
          </p>
        </div>

        <div class="globus__text-row">
          <svg class="globus__icon" width="4.792vw" height="0.833vw">
            <use href="@/assets/img/sprite.svg#line2-icon"></use>
          </svg>
          <span>5481</span>
          <p>
            иногородних <br />
            студентов
          </p>
        </div>

        <div class="globus__text-row">
          <svg class="globus__icon" width="5vw" height="0.573vw">
            <use href="@/assets/img/sprite.svg#line3-icon"></use>
          </svg>
          <span>ХХ</span>
          <p>Партнеров</p>
        </div>
      </div>

      <CalendarDouble
      :padding="{padding: '0 0.52vw 0.1vw 0.52vw'}"
      :lineHeightRight="{lineHeight: '1.05vw'}"
      />
  
    </div>
  </div>
</template>

<script>
import CalendarDouble from "./widgets/calendar/CalendarDouble.vue";

export default {
  name: "Globus",
  methods: {
    int_activity_click: function () {
      this.connection.send("int_activity_click");
    },
  },
  created() {
    const ws_url = "ws://195.211.102.43:8999";
    this.connection = new WebSocket(ws_url);

    this.connection.onerror = (error) => {
      console.log(error);
    };
  },
  mounted() {
    let myearth;
    let sprites = [];

    myearth = new Earth("myearth", {
      location: {
        lat: 20,
        lng: 20,
      },
      light: "none",
      mapImage: "./hologram-map.svg",
      transparent: true,
      autoRotate: true,
      autoRotateSpeed: 5,
      autoRotateDelay: 100,
      autoRotateStart: 1000,
    });

    myearth.addEventListener("ready", function () {
      this.startAutoRotate();

      // connections

      var line = {
        color: "#009CFF",
        opacity: 0.15,
        hairline: true,
        offset: -0.5,
      };

      for (var i in connections) {
        line.locations = [
          {
            lat: connections[i][0],
            lng: connections[i][1],
          },
          {
            lat: connections[i][2],
            lng: connections[i][3],
          },
        ];
        this.addLine(line);
      }

      // add 8 shine sprites

      for (var i = 0; i < 8; i++) {
        sprites[i] = this.addSprite({
          image: "./hologram-shine.svg",
          scale: 1,
          offset: -0.5,
          opacity: 1,
        });
        pulse(i);
      }
    });

    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function pulse(index) {
      var random_location =
          connections[getRandomInt(0, connections.length - 1)];
      sprites[index].location = {
        lat: random_location[0],
        lng: random_location[1],
      };

      sprites[index].animate("scale", 0.5, {
        duration: 320,
        complete: function () {
          this.animate("scale", 0.2, {
            duration: 320,
            complete: function () {
              setTimeout(function () {
                pulse(index);
              }, getRandomInt(100, 400));
            },
          });
        },
      });
    }

    var connections = [
      [59.651901245117, 17.918600082397, 41.8002778, 12.2388889],
      [59.651901245117, 17.918600082397, 51.4706, -0.461941],

      [13.681099891662598, 100.74700164794922, -6.1255698204, 106.65599823],
      [
        13.681099891662598, 100.74700164794922, 28.566499710083008,
        77.10310363769531,
      ],

      [30.12190055847168, 31.40559959411621, -1.31923997402, 36.9277992249],
      [30.12190055847168, 31.40559959411621, 25.2527999878, 55.3643989563],
      [30.12190055847168, 31.40559959411621, 41.8002778, 12.2388889],

      [
        28.566499710083008, 77.10310363769531, 7.180759906768799,
        79.88410186767578,
      ],
      [
        28.566499710083008, 77.10310363769531, 40.080101013183594,
        116.58499908447266,
      ],
      [28.566499710083008, 77.10310363769531, 25.2527999878, 55.3643989563],

      [-33.9648017883, 18.6016998291, -1.31923997402, 36.9277992249],

      [-1.31923997402, 36.9277992249, 25.2527999878, 55.3643989563],

      [41.8002778, 12.2388889, 51.4706, -0.461941],
      [41.8002778, 12.2388889, 40.471926, -3.56264],

      [19.4363, -99.072098, 25.79319953918457, -80.29060363769531],
      [19.4363, -99.072098, 33.94250107, -118.4079971],
      [19.4363, -99.072098, -12.0219, -77.114304],

      [-12.0219, -77.114304, -33.393001556396484, -70.78579711914062],
      [-12.0219, -77.114304, -34.8222, -58.5358],
      [-12.0219, -77.114304, -22.910499572799996, -43.1631011963],

      [-34.8222, -58.5358, -33.393001556396484, -70.78579711914062],
      [-34.8222, -58.5358, -22.910499572799996, -43.1631011963],

      [22.3089008331, 113.915000916, 13.681099891662598, 100.74700164794922],
      [22.3089008331, 113.915000916, 40.080101013183594, 116.58499908447266],
      [22.3089008331, 113.915000916, 31.143400192260742, 121.80500030517578],

      [35.552299, 139.779999, 40.080101013183594, 116.58499908447266],
      [35.552299, 139.779999, 31.143400192260742, 121.80500030517578],

      [33.94250107, -118.4079971, 40.63980103, -73.77890015],
      [33.94250107, -118.4079971, 25.79319953918457, -80.29060363769531],
      [33.94250107, -118.4079971, 49.193901062, -123.183998108],

      [40.63980103, -73.77890015, 25.79319953918457, -80.29060363769531],
      [40.63980103, -73.77890015, 51.4706, -0.461941],

      [51.4706, -0.461941, 40.471926, -3.56264],

      [
        40.080101013183594, 116.58499908447266, 31.143400192260742,
        121.80500030517578,
      ],

      [-33.94609832763672, 151.177001953125, -41.3272018433, 174.804992676],
      [-33.94609832763672, 151.177001953125, -6.1255698204, 106.65599823],

      [55.5914993286, 37.2615013123, 59.651901245117, 17.918600082397],
      [55.5914993286, 37.2615013123, 41.8002778, 12.2388889],
      [55.5914993286, 37.2615013123, 40.080101013183594, 116.58499908447266],
      [55.5914993286, 37.2615013123, 25.2527999878, 55.3643989563],
    ];
  },

  components: {
    CalendarDouble
  },
};
</script>

<style lang="scss">

.globus__text-contains {
  position: absolute;
  right: 3.125vw;
  top: 4.01vw;
}

.globus__icon {
  position: absolute;
  left: -5.5vw;
  top: 0.1vw;
}

.globus__text-row {
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 0.677vw;
  }

  span {
    display: block;
    font-size: 1.146vw;
    color: #fb9b2b;
    line-height: 1.042vw;
    margin-bottom: 0.156vw;
  }

  p {
    font-size: 0.469vw;
    line-height: 0.729vw;
    text-transform: uppercase;
    color: #627dae;
    letter-spacing: 0.1em;
  }
}

.globus {
  position: relative;
  width: 21.771vw;
  height: 15.104vw;
  cursor: pointer;
}

.globus__title {
  letter-spacing: 0.05em;
  font-size: 0.938vw;
  padding: 1.563vw;
}

.globus__wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

#myearth {
  width: 13.021vw;
  height: 13.021vw;
  top: -2.5vw;
}
</style>
