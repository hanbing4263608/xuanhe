<template>
	<div id='home'>
		<xhheader ref="indexheader" v-show="headershow"></xhheader>
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide>
				<div class="content ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="2s" swiper-animate-delay="1s">
					<div class="group">
						<div class="icon-box">
							<div class="item">
								<i class="el-icon-collection"></i>
								<p>专注</p>
							</div>
							<div class="item">
								<i class="el-icon-collection"></i>
								<p>用心</p>
							</div>
							<div class="item">
								<i class="el-icon-collection"></i>
								<p>服务</p>
							</div>
						</div>
						<div class="line ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration=".6s" swiper-animate-delay="2.5s"></div>
						<div class="title-box">
							以用户需求为核心
						</div>
						<div class="line ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration=".6s" swiper-animate-delay="2.5s"></div>
						<div class="text-box">
							用心打交道，全心全意服务客户，公司业务得了持续高速发展，也为员工提供了极大的发展空间。
						</div>

						<div class="btn-box">
							<span>企业文化</span>
							<i class="el-icon-right"></i>
						</div>
					</div>

				</div>
				<div class="navlist ani" ref="navlist" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s"
				 swiper-animate-delay="0s">
					<router-link tag="div" :to="item.href" v-for="(item,index) in navlist" :class="{active:index == curIndex}" :key="'headNav'+index">
						{{item.name}}
					</router-link>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="leftBox ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
				</div>
				<div class="rightBox">
					<div class="rBoxTop ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
						<img src="../../../static/images/home/AboutUs.png" alt="" />
					</div>
					<div class="rBoxCen ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
						<img src="../../../static/images/home/aboutbig.png" alt="" />
					</div>
					<div class="rBoxBot ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s">>
						公司以"专注,用心,服务"为核心价值,通过我们的专业水平和不懈努力为广大消费者提供优质的服务。多年来,北京煊赫电子商务有限公司一直秉承以用户需求为核心,在专注以产品零售和批发行业为基础的同时,提供用心周到的服务,赢得了众多消费者的信赖和好评。
					</div>
					<div class="rBtn">more</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<ul class="threePage ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
					<li>
						<div class="three-top">
							<div>
								<p class="p-opt opt1">乳胶制品</p>
								<p class="p-opt opt2">LATEX PRODUCT</p>
							</div>
							<img src="../../../static/images/home/rujiaoobj.png" alt="">
						</div>
						<div class="three-bot">
							<div>
								<div class="three-but-num">
									<p class="p-opt">LATEX</p>
									<p class="p-opt">PRODUCT</p>
								</div>
								<div class="three-more">
									<p class="p-opt">乳胶制品</p>
									<div class="p-btn">
										<span>MORE</span>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>
						<div class="three-top">
							<div>
								<p class="p-opt opt1">智能产品</p>
								<p class="p-opt opt2">INTELLIGENT PRODUCT</p>
							</div>
							<img src="../../../static/images/home/zhinengobj.png" alt="">
						</div>
					</li>
					<li>
						<div class="three-top">
							<div>
								<p class="p-opt opt1">保健用品</p>
								<p class="p-opt opt2">HEALTH SUPPLIES</p>
							</div>
							<img src="../../../static/images/home/baojianobj.png" alt="">
						</div>
					</li>
					<li>
						<div class="three-top">
							<div>
								<p class="p-opt opt1">无纺布纸巾</p>
								<p class="p-opt opt2">NON-WOVEN TISSUE</p>
							</div>
							<img src="../../../static/images/home/wufangobj.png" alt="">
						</div>
					</li>
				</ul>
			</swiper-slide>
			<swiper-slide>
				<div class="leftbox">
					<div class="title">
						Press Center
					</div>
					<div class="title">
						新闻中心
					</div>
					<div class="text ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
						公司以"专注,用心,服务"为核心价值,通过我们的专业水平和不懈努力为广大消费者提供优质的服务。多年来,北京煊赫电子商务有限公司一直秉承以用户需求为核心,在专注以产品零售和批发行业为基础的同时,提供用心周到的服务,赢得了众多消费者的信赖和好评。
					</div>
					<div class="btn">
						MORE
					</div>
				</div>
				<div class="rightbox ani" swiper-animate-effect="fadeInRight" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
					<div class="bottombox ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="1.6s">
						<div class="content ani" swiper-animate-effect="fadeInUp" swiper-animate-duration="1.5s" swiper-animate-delay="3.6s">
							<div class="title">
								<p>生命的诠释</p>
								<p>2019/7/30</p>
							</div>
							<div class="text">
								公司以"专注,用心,服务"为核心价值,通过我们的专业水平和不懈努力为广大消费者提供优质的服务。多年来,北京煊赫电子商务有限公司一直秉承以用户需求为核心,在专注以产品零售和批发行业为基础的同时,提供用心周到的服务,赢得了众多消费者的信赖和好评。
								<div class="btn"><i class="el-icon-right"></i></div>
							</div>
						</div>
					</div>
				</div>
			</swiper-slide>
			<swiper-slide>
				<div class="big">
					<div class="left ani" swiper-animate-effect="fadeInLeft" swiper-animate-duration="1.5s" swiper-animate-delay="0s">
						<img src="../../../static/images/home/Contactus.png" alt="" class='first'/>
						<img src="../../../static/images/home/callme.png" alt="" class='two'/>
						<p>
							<span>
								我们公司不仅仅提供专业细致的服务，同时还建立了完善的售后服务体系，我们公司主营业务乳胶系列产品赢得了众多消费者的青睐
							</span>
							<span>
								我们相信，通过我们的不断努力和追求，一定能够实现互利共赢，而且我们非常重视培养人才，实行任人唯贤的人力资源政策，积极培养有理想、
								有道德、有责任感、有协作精神的现代化员工队伍，同时积极引进先进的管理理念，采用规范化、科学化的管理方法不断壮大自身实力
							</span>
						</p>
						<div class="five">
							<img src="../../../static/images/home/wechat.png" alt="" />
							<ul>
								<li>
									<i>电话</i>15101066987
								</li>
								<li>
									<i>邮件</i>474260269@qq.com
								</li>
								<li>
									<i>地址</i>北京市大兴区金苑路32号1楼2层221室
								</li>
							</ul>
						</div>
					</div>
					<div class="right">
						<img src="../../../static/images/home/5-tu.jpg" alt="" />
						<p>京ICP备19059269号 Copyright © 2019-2022 北京煊赫电子商务有限公司</p>
					</div>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
	import xhheader from '../../components/xh-header.vue'
	import * as swiperAni from '../../../static/style/swiper.animate.js'
	export default {
		name: 'home',
		data() {
			return {
				swiperOptions: {

				},
				headershow: false,
				navlist: [{
						name: "首页",
						href: "/"
					},
					{
						name: "产品中心",
						href: "/list"
					},
					{
						name: "关于煊赫",
						href: "/about"
					},
					{
						name: "新闻中心",
						href: "/news"
					},
					{
						name: "联系我们",
						href: "/contact"
					}
				],
				curIndex: 0
			}
		},
		computed: {
			swiper() {
				return this.$refs.mySwiper.swiper
			}
		},
		methods: {
			slideChangeTransitionStart: function() {
				if (this.swiper.activeIndex == 0) {
					this.headershow = false;
				} else {
					this.headershow = true;
				}
			},
		},
		created() {
			let _this = this;
			this.swiperOptions = {
				pagination: {
					el: '.swiper-pagination',
					// type : 'progressbar', //分页器形状
					clickable: true, //点击分页器的指示点分页器会控制Swiper切换
				},
				direction: 'vertical',
				mousewheel: true,
				on: {
					slideChangeTransitionStart: _this.slideChangeTransitionStart,
					init: function() {
						swiperAni.swiperAnimateCache(this); //隐藏动画元素 
						swiperAni.swiperAnimate(this); //初始化完成开始动画
					},
					slideChangeTransitionStart: function() {
						swiperAni.swiperAnimate(this); //每个slide开始切换时也运行当前slide动画
						//this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名					
						_this.slideChangeTransitionStart()
					}
				},
			}

		},
		components: {
			xhheader
		},
		mounted() {
			this.slideChangeTransitionStart()
		}
	}
</script>

<style lang="scss" scoped>
	#home>>> {
		#xhheader {
			position: fixed;
			background: #fff;
			top: 0;
			left: 0;
			z-index: 100;

			.bottom {
				display: none;
			}

		}

		.swiper-container {
			width: 100vw;
			height: 100vh;

			.swiper-wrapper {
				.swiper-slide {
					width: 100vw;
					height: 100vh;
					position: relative;
					color: #fff;
					background: rgb(204, 204, 204);

					&:nth-of-type(1) {
						background: url(../../../static/images/news/u40.jpg) no-repeat;
						background-size: cover;
						background-origin: center;

						.content {
							width: 5.28rem;
							margin-top: -1.8rem;
							background: rgba(0, 0, 0, 0.3);
							position: absolute;
							right: 0;
							top: 50%;
							padding: .2rem 0 0 .4rem;

							.group {
								width: 3.5rem;

								.icon-box {
									display: flex;

									.item {
										display: flex;
										flex-direction: column;
										align-items: center;

										&:nth-of-type(2) {
											margin: 0 .3rem;
										}

										i {
											font-size: .38rem;
										}

										p {
											font-size: .12rem;
										}
									}
								}

								.line {
									width: 3.5rem;
									height: 0;
									border-top: 1px solid #fff;
									margin: .1rem 0;
								}

								.title-box {
									font-size: .4rem;
									line-height: .75rem;
								}

								.text-box {
									line-height: .3rem;
									font-size: .15rem;
								}

								.btn-box {
									width: 1.14rem;
									height: .38rem;
									background: #7c4e23;
									border-radius: .2rem;
									display: flex;
									justify-content: center;
									align-items: center;
									margin-top: .28rem;
									margin-bottom: .2rem;
									font-size: .16rem;
								}
							}
						}

						.navlist {
							display: flex;
							justify-content: center;
							font-size: .18rem;
							position: absolute;
							right: 0;
							bottom: 0;
							background: rgba(0, 0, 0, 0.3);

							div {
								padding: 0 .25rem;
								height: .6rem;
								display: flex;
								align-items: center;

								&:hover {
									background-color: #d4c5b7;
									color: #fff;
								}

								&.active {
									background-color: #d4c5b7;
									color: #fff;
								}
							}
						}
					}

					&:nth-of-type(2) {

						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						align-items: center;
						align-content: center;
						box-sizing: border-box;
						padding: 1.3rem 1.5rem 0;

						.leftBox {
							width: 4.4rem;
							height: 4.6rem;
							border-radius: 0.1rem;
							background: url(../../../static/images/home/2-big.jpg);
							background-size: cover;
							margin-right:1rem;
						}

						.rightBox {
							width: 4rem;
							box-sizing: border-box;

							.rBoxTop,
							.rBoxCen {
								margin-bottom: .2rem;

								img {
									height: .4rem;
								}
							}

							.rBoxBot {
								width: 100%;
								margin-top: 0.3rem;
								font-size: 0.14rem;
								line-height: 0.3rem;
								color: #eee;
							}

							.rBtn {
								margin-top: 0.4rem;
								width: 1.2rem;
								height: 0.5rem;
								background-color: rgb(124, 78, 35);
								color: #FFFFFF;
								line-height: 0.5rem;
								font-size: 0.2rem;
								text-align: center;
								border-radius: 0.4rem;
							}
						}

						@media screen and (max-width:1000px) {
							flex-direction: column-reverse;

							.leftBox {
								width: 80vw;
							}

							.rightBox {
								width: 80vw;
								margin-bottom: .3rem;
							}
						}
					}

					&:nth-of-type(3) {
						.threePage {
							width: 100%;
							height: 100%;
							box-sizing: border-box;
							background: #ccc;

							li {
								height: 100vh;
								text-align: center;
								float: left;
								display: flex;
								align-items: center;
								flex-wrap: wrap;
								overflow: hidden;
								z-index: 20;
								background: #ccc;

								&:first-child {
									width: 40%;
								}

								&:nth-child(2) {
									width: 20%;
									background-color: rgb(191, 191, 191);
								}

								&:nth-child(3) {
									width: 20%;
								}

								&:nth-child(4) {
									width: 20%;
									background-color: rgb(191, 191, 191);
								}

								.three-top {
									width: 100%;
									margin-top: 1rem;

									div {
										margin-bottom: 3vh;

										p {
											color: white;
											padding: 8px 0px;
										}

										.opt1 {
											font-size: 30px;
										}

										.opt2 {
											font-size: 14px;
										}
									}

									img {
										width: 198px;
									}
								}

								.three-bot {
									width: 100%;
									height: 2rem;
									background: #e2e2e2;
									display: flex;
									align-items: center;
									color: #7c4123;
									left: 0;
									div {
										width: 100%;
										margin: 0 auto;
										display:flex;
										flex-direction: column;
										align-items: center;
										.three-but-num {
											width: 100%;
											height: 126px;
											line-height: 63px;
											font-size: 40px;
											position: absolute;
											top: -40%;

											p {
												width: 100%;
												text-align: left;
												font-size: 40px;
											}
										}

										.three-more {
											width:100%;
											text-align: center;
											font-size: .25rem;
											.p-btn {
												margin-top:10px;
												width: 100px;
												height: 40px;
												line-height:40px ;
												background: #7c4123;
												border-radius: 20px;
												border: none;
												color: white;
											
												p {
													display: flex;
													color: white;
													justify-content: center;
													position: relative;
													z-index: 999;
													align-items: center;
													font-size: 14px;
												}
											}
										}

										
									}
								}
							}
						}
					}


					&:nth-of-type(4) {
						// background:url(../../../static/images/components/u1092.png) no-repeat center center;
						// background-size:cover;
						display: flex;
						flex-wrap: wrap;
						justify-content: center;
						align-items: center;
						align-content: center;
						padding-top: 1rem;

						.leftbox {
							width: 4rem;
							margin-right: .5rem;
							margin-bottom: .2rem;

							.title {
								font-size: .46rem;
								color: rgb(124, 78, 35);
								margin-bottom: .3rem;
							}

							.text {
								font-size: .12rem;
								line-height: .2rem;
								margin-bottom: .24rem;
							}

							.btn {
								width: 1.2rem;
								height: .5rem;
								background: rgb(124, 78, 35);
								text-align: center;
								line-height: .5rem;
								border-radius: .25rem;
							}
						}

						.rightbox {
							border-radius: .08rem;
							width: 5.2rem;
							height: 4.2rem;
							position: relative;
							overflow: hidden;
							background: url(../../../static/images/home/content.jpg);
							background-size: cover;

							.bottombox {
								position: absolute;
								bottom: 0;
								padding: .2rem;
								color: #fff;
								background: rgba(0, 0, 0, .3);

								.title {
									display: flex;
									justify-content: space-between;

									p {
										font-size: .14rem;
										text-decoration: underline;
									}
								}

								.text {
									font-size: .12rem;
									line-height: .16rem;
									color: #eee;
									position: relative;

									.btn {
										width: .55rem;
										height: .18rem;
										display: flex;
										justify-content: center;
										align-items: center;
										font-size: .16rem;
										position: absolute;
										bottom: 0;
										right: 0;
										background: rgba(0, 0, 0, .3);
										border: 1px solid #fff;
									}
								}

							}

						}

						@media screen and (max-width:800px) {
							.leftbox {
								margin-reight: 0;
								width: 70vw;
							}

							.rightbox {
								width: 80vw;

								.bottombox {
									display: none;
								}
							}

						}
					}
					
					&:nth-of-type(5) {
						.big{
							width: 100%;
							display:flex;
							padding-top:1rem;
							.left{
								height:600px;
								display:flex;
								flex-direction: column;
								flex:300px;
								align-items: center;
								background-color:#CCCCCC;
								.first{
									display: block;
									height: 36px;
									margin-top:40px;
								}
								.two{
									display: block;
									height: 34px;
									margin-top:38px;
								}
								p{
									width: 50%;
									margin-top:40px;
									span{
										display: inline-block;
									    text-indent: 24px;
									    line-height: 20px;
									    font-size: 12px;
									    color: rgba(0,0,0,0.7);
									}
								}
								.five{
									margin-top:40px;
									display:flex;
									height:78px;
									align-items: center;
									ul{
										width:267px;
										height:66px;
										display:flex;
										flex-direction: column;
										justify-content: space-between;
									}
									img{
										width: 66px;
										height: 66px;
									}
								}
							}
							.right{
								height:600px;
								flex:1;	
								img{
									width: 100%;
									height: 100%;
								}
									
								p{
									position:relative;
									top:-50px;
									left:350px;
								}
								@media screen and (max-width: 640px) {
									display:none;
								}
							}
						}
					}
				}
			}

			.swiper-pagination {
				margin-right: .24rem;
				height: 1.8rem;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.swiper-pagination-bullet {
					background: #000;
					opacity: 1;
					width: .14rem;
					height: .14rem;
					transition: .9s;

					&:hover {
						background: rgb(255, 84, 0);
					}
				}

				.swiper-pagination-bullet-active {
					background: rgb(255, 84, 0);

					&:before {
						display: block;
						content: "";
						width: .14rem;
						height: .14rem;
						border: 1px solid rgb(255, 84, 0);
						border-radius: 50%;
						transform-origin: .105rem .105rem;
						transform: scale(1.5);
					}
				}

			}

		}
	}
</style>
