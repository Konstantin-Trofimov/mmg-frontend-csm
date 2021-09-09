<template>
	<div class="bg">
		<svg class="bg__icon" width="33.802vw" height="22.240vw">
			<use href="@/assets/img/sprite.svg#bg-icon"></use>
		</svg>
		<span class="bg__part" v-for="item of items" :key="item" :style="renderStyle()"></span>
	</div>
</template>

<script>
export default {
	name: 'Bg',

	data() {
		return {
			items: 50,
			winWidth: window.innerWidth - 100,
			winHeight: window.innerHeight - 100,
		}
	},

	mounted() {
		const bgParts = document.querySelectorAll('.bg__part')

		setInterval(() => {
			bgParts.forEach(bgPart => {
				bgPart.style.top = this.setPositionY() + 'px'
				bgPart.style.left = this.setPositionX() + 'px'
			})
		}, 9000)
	},

	methods: {
		setPositionY() {
			return this.getRandomNumber(0, this.winHeight).toFixed(0)
		},

		setPositionX() {
			return this.getRandomNumber(0, this.winWidth).toFixed(0)
		},

		getRandomNumber(min, max) {
			return Math.random() * (max - min) + min
		},

		renderStyle() {
			return `
      top:${this.setPositionY()}px; 
      left: ${this.setPositionX()}px;
      transition: left ${this.getRandomNumber(7000, 8000)}ms ease 0s, top ${this.getRandomNumber(7000, 8000)}ms ease 0s, bottom ${this.getRandomNumber(7000, 8000)}ms ease 0s, right ${this.getRandomNumber(7000, 8000)}ms ease 0s;
      animation-delay: ${this.getRandomNumber(0, 6)}s;
      `
		},
	},
}
</script>

<style lang="scss">
.bg {
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: -1;
	background: url('../../assets/img/bg.png') repeat center/1920px;
	overflow: hidden;

	&__part {
		background-color: #132965;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		width: 0.53vw;
		height: 1.1vh;
		animation: opacity 4s infinite;
		animation-direction: alternate;
	}

	@keyframes opacity {
		0% {
			opacity: 0.5;
		}
		50% {
			opacity: 0.8;
		}
		100% {
			opacity: 1;
		}
	}
}
</style>
