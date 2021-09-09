<template>
  <main class="layout">

    <div class="top_pagination" v-if="showToHome">
      <div class="go_to_home" @click="back_click" >
        <svg width="8vw" height="2.4vw" viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.5 38V38.2071L0.646447 38.3536L13.6464 51.3536L13.7929 51.5H14H158.5H159V51V11V10.7929L158.854 10.6464L148.854 0.646447L148.707 0.5H148.5H1H0.5V1V38Z" stroke="#217AFF" stroke-opacity="0.4"/>
          <path d="M31.75 32.6518L21.7222 25.5L31.75 18.3482L31.75 32.6518Z" stroke="#217AFF" stroke-width="2"/>
        </svg>
        <span>
            На главную
          </span>
      </div>
    </div>

    <div v-if="showSciense == 7">
      <div class="top_pagination_list">
        <ul class="result_pagination">
          <li
              @click="handlerPaginate(1)"
              :class="{ active: isActive == 1 }"
          >
            <svg width="2.4vw" height="2.4vw" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z" stroke="#217AFF" stroke-width="2"/>
            </svg>
            <span>1</span>
          </li>

          <li
              @click="handlerPaginate(2)"
              :class="{ active: isActive == 2 }"
          >
            <svg width="2.4vw" height="2.4vw" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z" stroke="#217AFF" stroke-width="2"/>
            </svg>
            <span>2</span>
          </li>

          <li
              @click="handlerPaginate(3)"
              :class="{ active: isActive == 3 }"
          >
            <svg width="2.4vw" height="2.4vw" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z" stroke="#217AFF" stroke-width="2"/>
            </svg>
            <span>3</span>
          </li>

          <li
              @click="handlerPaginate(4)"
              :class="{ active: isActive == 4 }"
          >
            <svg width="2.4vw" height="2.4vw" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z" stroke="#217AFF" stroke-width="2"/>
            </svg>
            <span>4</span>
          </li>

          <li
              @click="handlerPaginate(5)"
              :class="{ active: isActive == 5 }"
          >
            <svg width="2.4vw" height="2.4vw" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M80.9858 109L109 80.9858V1H22.4142L1 22.4142V109H80.9858Z" stroke="#217AFF" stroke-width="2"/>
            </svg>
            <span>5</span>
          </li>
        </ul>
      </div>

      <img v-if="showResult == 1" src="../assets/img/result-1.svg" alt="" class="result-img"/>
      <img v-if="showResult == 2" src="../assets/img/result-2.svg" alt="" class="result-img"/>
      <img v-if="showResult == 3" src="../assets/img/result-3.svg" alt="" class="result-img"/>
      <img v-if="showResult == 4" src="../assets/img/result-4.svg" alt="" class="result-img"/>
      <img v-if="showResult == 5" src="../assets/img/result-5.svg" alt="" class="result-img"/>

    </div>

    <div class="btn_bg" v-on:click="bg_click" v-if="showSciense == 0">
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" class="test">
        <path
            d="M51.5 38V38.2071L51.3536 38.3536L38.3536 51.3536L38.2071 51.5H38H1H0.5V51V11V10.7929L0.646446 10.6464L10.6464 0.646447L10.7929 0.5H11H51H51.5V1V38Z"
            stroke="#217AFF"
            stroke-opacity="0.4"
        />
        <path d="M32.6657 17C35.2923 18.9086 37 22.0048 37 25.5C37 31.299 32.299 36 26.5 36C20.701 36 16 31.299 16 25.5C16 22.0048 17.7077 18.9086 20.3343 17" stroke="#217AFF" stroke-width="2" />
        <path d="M26.5 13V27" stroke="#217AFF" stroke-width="2" />
      </svg>
    </div>

    <img v-if="showSciense == 0" @click="handler" src="../assets/img/ph.svg" alt="" class="ph-img" width="100%" />
    <img v-if="showSciense == 1" @click="handler" src="../assets/img/science.svg" alt="" class="br-img" width="100%" />
    <img v-if="showSciense == 2" @click="handler" src="../assets/img/finance.svg" alt="" class="test-img" width="100%" />
    <img v-if="showSciense == 4" @click="handler" src="../assets/img/branches.svg" alt="" class="degree-img" width="100%" />
    <img v-if="showSciense == 5" @click="handler" src="../assets/img/students.svg" alt="" class="test-img" width="100%" />
    <img v-if="showSciense == 9" @click="handler" src="../assets/img/international.svg" alt="" class="result-img" width="100%" />
    <img v-if="showSciense == 10" @click="handler" src="../assets/img/all_branches.svg" alt="" class="br-img" width="100%" />
    <img v-if="showSciense == 11" @click="handler" src="../assets/img/cadres.svg" alt="" class="result-img" width="100%" />
    <img v-if="showSciense == 12" @click="handler" src="../assets/img/bachelors.svg" alt="" class="degree-img" width="100%" />
    <img v-if="showSciense == 13" @click="handler" src="../assets/img/masters.svg" alt="" class="degree-img" width="100%" />
    <!--		<img v-if="showSciense == 7" @click="handler" src="/img/group232.svg" alt="" class="test-img" width="100%" />-->
    <img v-if="showSciense == 8" @click="handler" src="../assets/img/priority.svg" alt="" class="priority-img"/>

    <div v-if="showSciense == 3 || (showSciense == 0 && activeBg)" class="video">
      <video autoplay="" loop="" muted="" playsinline="">
        <source src="../assets/img/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
        Тег video не поддерживается вашим браузером.
      </video>
    </div>

    <img v-if="showSciense == 3" @click="handler" src="../assets/img/gif2.png" alt="" class="test-img" height="95%" width="auto" />

    <div v-if="showSciense == 6">
      <div class="bg-grey"></div>

      <div class="video">
        <video autoplay="" loop="" muted="" playsinline="">
          <source src="../assets/img/video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"' />
          Тег video не поддерживается вашим браузером.
        </video>
      </div>

      <img @click="handler" src="../assets/img/gif2.png" alt="" class="test-img portret__foto" height="95%" width="auto" />

      <div class="portret__title" >Плеханов Георгий Валентинович<br />Философ<br />1856 - 1918 гг.</div>
    </div>

  </main>
</template>

<script>
export default {
  name: 'Sciense',
  data() {
    return {
      showToHome: false,
      showResult: 1,
      isActive: 1,
      showSciense: 0,
      activeGif: false,
      activeBg: false,
      urlImg: '../assets/img/gif1.png',
      urlImg2: '../assets/img/gif2.png',
    }
  },
  components: {},
  methods: {
    handler() {
      this.activeGif = !this.activeGif

      if (this.activeGif) {
        this.urlImg = '../assets/img/gif1.gif'
        this.urlImg2 = '../assets/img/gif2.gif'
      } else {
        this.urlImg = '../assets/img/gif1.png'
        this.urlImg2 = '../assets/img/gif2.png'
      }
    },

    handlerPaginate(evn){
      this.showResult = false;
      this.showResult = evn;
      this.isActive = evn
    },

    bg_click() {
      this.activeBg = !this.activeBg
    },

    back_click: function() {

      this.connection.send('back_click')
    },
  },
  created() {
    const ws_url = 'ws://195.211.102.43:8999'
    this.connection = new WebSocket(ws_url)

    this.connection.onerror = error => {
      console.log(error)
    }

    this.connection.onmessage = e => {
      console.log(e.data)
      if (e.data == 'sc_click') {
        this.showSciense = 1
        this.showToHome = true
      }
      if (e.data == 'r_click' || e.data == 'back_click') {
        this.showSciense = 0
        this.showToHome = false
      }
      if (e.data == 'fin_click') {
        this.showSciense = 2
        this.showToHome = true
      }

      if (e.data == 'prt_click') {
        this.showSciense = 3
        this.showToHome = true
      }

      if (e.data == 'prt2_click') {
        this.showSciense = 6
        this.showToHome = false
      }

      if (e.data == 'memb_click') {
        this.showSciense = 4
        this.showToHome = true
      }

      if (e.data == 'stud_click') {
        this.showSciense = 5
        this.showToHome = true
      }

      if (e.data == 'cr1_click') {
        this.showSciense = 7
        this.showToHome = true
      }

      if (e.data == 'create_priority_img') {
        this.showSciense = 8
        this.showToHome = true
      }

      if (e.data == 'int_activity_click') {
        this.showSciense = 9
        this.showToHome = true
      }

      if (e.data == 'all_branches') {
        this.showSciense = 10
        this.showToHome = true
      }

      if (e.data == 'staff_branches') {
        this.showSciense = 11
        this.showToHome = true
      }

      if (e.data == 'bachelors_click') {
        this.showSciense = 12
        this.showToHome = true
      }

      if (e.data == 'masters_click') {
        this.showSciense = 13
        this.showToHome = true
      }

    }
  },
}
</script>

<style lang="scss">
.btn_bg {
  z-index: 999;
  cursor: pointer;
}

.priority-img {
  width: 100vw;
  height: 50vw;
}

.test {
  position: absolute;
  left: 45px;
  top: 45px;
  cursor: pointer;
  z-index: 999;
}

.test-img {
  z-index: 998;
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

.top_pagination{
  position: absolute;
  top: 2vw;
  left: 4vw;
  display: flex;
  z-index: 999;
}

.top_pagination_list{
  position: absolute;
  top: 2vw;
  left: 12.7vw;
  display: flex;
  z-index: 99;
}

.go_to_home{
  position: relative;
  margin-right: 1vw;
  cursor: pointer;
}

.go_to_home span{
  font-family: Rubik;
  font-weight: 700;
  font-size: 0.625vw;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #217aff;
  position: absolute;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 1.2vw;
  right: 0;
  bottom: 0;
}

.result_pagination{
  display: flex;
  list-style-type: none;
}

.result_pagination li{
  position: relative;
  cursor: pointer;
  opacity: .55;
}

.result_pagination li.active{
  opacity: 1;
}

.result_pagination li+li{
  margin-left: .7vw;
}

.result_pagination li span{
  font-family: Rubik;
  font-weight: 700;
  font-size: 0.75vw;
  letter-spacing: 0.1em;
  color: #217aff;
  position: absolute;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.result-img {
  width: 91vw;
  margin: 3.4vw auto 0 auto;
  height: 50vw;
}

.degree-img {
  width: 90vw;
  margin: 3.8vw auto 0 auto;
  height: 44.8vw;
}

.br-img {
  width: 92vw;
  margin: 1vw auto auto auto;
  height: 50vw;
}

.ph-img{
  margin: auto;
  height: 100vh;
  width: 60%;
}

</style>

