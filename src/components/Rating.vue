<template>
  <div class="rating" v-on:click="memb_click">
    <svg class="rating__box" width="21.719vw" height="16.927vw">
      <use href="@/assets/img/sprite.svg#rating-box-icon"></use>
    </svg>
    <p class="rating__title">Филиалы (вакцинация)</p>

    <CalendarDouble 
      :padding="{padding: '0 0.21vw 1.15vw 0.53vw'}"
      :lineHeightRight="{lineHeight: '0.992vw'}"
    />

    <div class="rating__wrapper">
      <div class="rating__list">
        <div class="rating__item">
          <p class="rating__name">Севастопольский</p>
          <div class="rating__wrap">
            <ProgressSecond line_48/>
            <span class="rating__value">48</span>
          </div>

          <div class="rating__wrap">
            <ProgressSecond progress_red line_21/>
            <span class="rating__value rating__value--red">21</span>
          </div>
        </div>

        <div class="rating__item">
          <p class="rating__name">Тульский</p>
          <div class="rating__wrap">
            <ProgressSecond line_37 />
            <span class="rating__value">37</span>
          </div>

          <div class="rating__wrap">
            <ProgressSecond progress_red line_27/>
            <span class="rating__value rating__value--red">27</span>
          </div>
        </div>

        <div class="rating__item">
          <p class="rating__name">Волгоградский</p>
          <div class="rating__wrap">
            <ProgressSecond line_55/>
            <span class="rating__value">55</span>
          </div>

          <div class="rating__wrap">
            <ProgressSecond progress_red line_27/>
            <span class="rating__value rating__value--red">27</span>
          </div>
        </div>
      </div>
      <img src="@/assets/img/graph.svg" alt="" />
    </div>

    <div class="rating__rows">
      <div class="rating__row">
        <div class="rating__info">
          <svg class="rating__info-icon" width="0.833vw" height="0.833vw">
            <use href="@/assets/img/sprite.svg#info-icon1"></use>
          </svg>
          <span class="rating__info-text">Кол-во сотрудников</span>
        </div>
      </div>

      <div class="rating__row">
        <div class="rating__info">
          <svg class="rating__info-icon" width="0.833vw" height="0.833vw">
            <use href="@/assets/img/sprite.svg#info-icon2"></use>
          </svg>
          <span class="rating__info-text">Привившиеся</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressSecond from "./ProgressSecond.vue";
import CalendarDouble from "./widgets/calendar/CalendarDouble.vue";

export default {
  name: "Rating",
  methods: {
    memb_click: function () {
      this.connection.send("memb_click");
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
    ProgressSecond,
    CalendarDouble
  },
};
</script>

<style lang="scss">
.rating__list {
  position: absolute;
  top: 4.1vw;
  left: 2.2vw;
  right: 2.2vw;
}

.rating__name {
  font-size: 0.469vw;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 700;
  line-height: 0.573vw;
  margin-bottom: 0.417vw;
}

.rating__item:not(:last-of-type) {
  margin-bottom: 0.6vw;
}

.rating__wrap {
  display: flex;
  align-items: center;
}

.rating__value {
  font-weight: bold;
  font-size: 0.521vw;
  color: #fb9b2b;
  margin-left: 0.156vw;

  &--red {
    color: #ff5a5a;
  }
}

.rating__rows {
  position: absolute;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2.4vw;
}

.rating__row {
  &:not(:last-of-type) {
    margin-bottom: 0.156vw;
  }
}

.rating__info {
  display: flex;
  align-items: center;
}

.rating__info-icon {
  flex: 0 0 auto;
  margin-right: 0.521vw;
}
.rating__info-text {
  font-size: 0.677vw;
  line-height: 0.833vw;
  letter-spacing: 0.03em;
}
.rating__wrapper {
  width: 18.698vw;
  height: 10.417vw;
  margin: -0.9vw auto 0;

  img {
    position: relative;
    z-index: 1;
    width: 18.698vw;
    height: 10.417vw;
  }
}
.rating {
  margin-top: 5.99vw;
  width: 21.51vw;
  height: 18.021vw;
  position: relative;
  z-index: 0;
  cursor: pointer;
}

.rating__box {
  position: absolute;
  z-index: -1;
}

.rating__title {
  font-size: 0.938vw;
  line-height: 1.042vw;
  letter-spacing: 0.05em;
  padding: 1.563vw;
}

</style>
