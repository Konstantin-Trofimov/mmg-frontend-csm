<template>
	<div class="wrapper">
    <Bg/>
    
    <Header/>

    <router-view></router-view>

    <Footer/>
	</div>
</template>

<script>
import Header from "./components/header/Header.vue"
import Footer from "./components/footer/Footer.vue"
import Bg from "./components/background/Background.vue"
export default {
	name: 'App',

	components: {
    Header,
    Footer,
    Bg
	},

  data() {
    return {
     
    }
  },
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
