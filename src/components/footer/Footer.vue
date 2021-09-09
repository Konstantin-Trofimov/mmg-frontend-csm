<template>
	<footer class="footer">
		<svg class="footer__img">
			<use href="@/assets/img/sprite.svg#footer-bg-icon"></use>
		</svg>

		<a href="/" class="footer__logo">
			<img src="@/assets/img/logo.svg" alt="" />
		</a>

		<div class="footer__btns">
			<div class="footer__btns-item">
				<button class="footer__btns-btn">
					<svg class="footer__btns-icon" width="9.844vw" height="3.385vw">
						<use href="@/assets/img/sprite.svg#footer-btn1"></use>
					</svg>

					<span class="footer__btns-text">Проверки</span>

					<span class="footer__btns-val">0</span>
				</button>
			</div>

			<div class="footer__btns-item">
				<button class="footer__btns-btn btn--large">
					<svg class="footer__btns-icon" width="10.677vw" height="3.438vw">
						<use href="@/assets/img/sprite.svg#footer-btn2"></use>
					</svg>

					<span class="footer__btns-text">Трансляции экзаменов</span>
				</button>
			</div>
		</div>
	</footer>
</template>

<script>
export default {
	name: 'Footer',
}
</script>

<style lang="scss">
.footer {
	position: relative;
}

.footer__btns-val {
	position: absolute;
	font-weight: 700;
	font-size: 0.521vw;
	bottom: 0.3vw;
	right: 0.3vw;
	padding: 0 0.881vw;
	background-color: #fb9b2b;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: .7vw .7vw 0 0;
		border-color: #101f54 transparent transparent transparent;
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		width: 0;
		height: 0;
		border-style: solid;
		border-width: 0 0 .7vw .7vw;
		border-color: transparent transparent #101f54 transparent;
	}
}

.footer__btns {
	position: absolute;
	bottom: 4vw;
	right: 8.5vw;
	display: flex;
}

.footer__btns-item {
	margin: 0 -0.3vw;
}

.footer__btns-btn {
	position: relative;
	width: 9.844vw;
	height: 3.385vw;
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #fff;
	padding-top: 0.7vw;
}

.btn--large {
	width: 10.677vw;
	height: 3.438vw;

	.footer__btns-text {
		position: relative;
		left: 0.5vw;
	}
}

.footer__btns-text {
	font-weight: 700;
	font-size: 0.521vw;
	letter-spacing: 0.1em;
	text-transform: uppercase;
}

.footer__btns-icon {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: -1;
}

.footer__logo {
	position: absolute;
	left: 4.271vw;
	bottom: 1vw;

	img {
		width: 10.677vw;
		height: 3.1vw;
	}
}

.footer__img {
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 6vw;
	overflow: hidden;
}
</style>
