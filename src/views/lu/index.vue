<template>
	<div id='lu'>
		<div class='lubox'>
			<div v-swiper:mySwiper="swiperOption">
				<div class="swiper-wrapper">
					<div class="swiper-slide box" :key="banner">
						
					</div>
					<div class="swiper-slide box" :key="banner">2</div>
					<div class="swiper-slide box" :key="banner">3</div>
				</div>
			</div>
		</div>

	</div>

</template>

<script>
	export default {
		name: 'index',
		data() {
			return {

				swiperOption: {
					pagination: {
						el: '.swiper-pagination'
					},
					direction: 'vertical', //设置竖向轮播
					indicatorDots: true,
				}
			}
		},
		methods: {
			_initSwiper() {

			}
		},
		mounted() {
			this.mySwiper.slideTo(0, 1000, false) //swiper插件的slide的索引;切换速度;设置为false时不会触发transition回调函数

		}
	}
</script>

<style lang="scss" scoped>
	* {
		margin: 0;
		padding: 0;
	}

	#lu>>> {
		.lubox {
			width: 100vw;
			height: 969px;
			overflow: hidden;

			.box {
				width: 100vw;
				height: 969px;
				background: pink;
				// background:url();
			}
		}
	}
</style>
