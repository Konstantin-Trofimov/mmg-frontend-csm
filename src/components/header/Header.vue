<template>
  <header class="header">
    <form action="/" class="header__search">
      <svg fill="none" xmlns="http://www.w3.org/2000/svg" class="header__search-bg">
        <use href="@/assets/img/sprite.svg#search-bg-icon"></use>
      </svg>

      <div class="header__search-contains">
        <button type="submit" class="header__search-submit">
          <svg width="0.885vw" height="1.8vh">
            <use href="@/assets/img/sprite.svg#search-icon"></use>
          </svg>
        </button>
        <input type="search" class="header__search-input" placeholder="Поиск" />
      </div>
    </form>



    <button class="header__link" id="rec_click" v-on:click="r_click">
      <svg class="header__link-icon" width="1.042vw" height="3.2vh" fill="none">
        <use href="@/assets/img/sprite.svg#user-icon"></use>
      </svg>

      <span class="header__link-text">ректор</span>

      <svg class="header__link-bg" fill="none">
        <use href="@/assets/img/sprite.svg#link-icon"></use>
      </svg>
    </button>

    <svg fill="none" xmlns="http://www.w3.org/2000/svg" class="header__bg" width="4.531vw" height="30.104vw">
      <use href="@/assets/img/sprite.svg#header-bg-icon"></use>
    </svg>
  </header>
</template>

<script>
export default {
  methods: {
    r_click: function() {
      this.connection.send('r_click')
    },




  },
  created() {
    const ws_url = 'ws://195.211.102.43:8999'
    this.connection = new WebSocket(ws_url)

    this.connection.onerror = error => {
      console.log(error)
    }
  },
  name: 'Header',
}
</script>

<style lang="scss">
.header {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}

.header__link-text {
  font-family: Rubik;
  font-weight: 700;
  font-size: 0.625vw;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #217aff;
}

.header__link-icon {
  margin-right: 0.833vw;
}

.header__link-bg {
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  z-index: -1;
  width: 100%;
  height: 100%;
}

.header__search {
  width: 50.833vw;
  margin: 0 auto;
  height: 3.542vw;
  position: relative;
  padding-top: 0.99vw;

  &:after {
    content: '';
    position: absolute;
    top: 0.99vw;
    border-bottom: 1px dashed #21caff;
    opacity: 0.5;
    width: 34.635vw;
    left: 5.833vw;
  }
}

.header__search-bg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: -0.313vw;
  bottom: 0;
  width: 50.6vw;
  height: 7.4vh;
}

.header__search-contains {
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  max-width: 39.063vw;
  margin: 0 auto;
}

.header__search-submit {
  flex: 0 0 auto;
  margin-right: 0.573vw;
}

.header__search-input {
  padding: 0.625vw 0;
  color: #fff;
}

.header__link {
  position: absolute;
  right: 4.479vw;
  top: 2.188vw;
  width: 10.781vw;
  height: 7vh;
  display: flex;
  align-items: center;
  padding-left: 0.938vw;
  padding-bottom: 0.625vw;
}

.header__bg {
  position: absolute;
  top: 0;
  right: 0;
}

svg {
  fill: transparent;
}

.priority__btn {
  position: absolute;
  left: 19.479vw;
  top: 2.188vw;
  width: 8.781vw;
  height: 2.4vw;
  display: flex;
  justify-content: center;
  align-items: center;
}


.priority__btn-border {
  left: 0;
  width: 8.781vw;
  height: 2.708vw;
  position: absolute;
}

.priority__btn-text {
  font-size: 0.72vw;
  color: #fb9b2b;
  text-transform: uppercase;
  font-weight: 700;
}
</style>
