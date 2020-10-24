<template>
	<div id="xhfooter">
		<div class="left">
			<nav>
				<router-link tag="div" :to="item.href" v-for="(item,index) in navlist" :class="{active:index == curIndex}" :key="'footNav'+index">
					{{item.name}}
				</router-link>
			</nav>
			<div class="address">
				<p class="en">No.293. Kaishan Road, Chuanshan District, Suining City: Sichuan Provinc</p>
				<p class="cn">地址:北京市大兴区金苑路32号院3号</p>
			</div>
			<div class="way">
				<div class="way-left">
					<p class="tel">Tel:0825-2287099</p>
					<div>
						<router-link tag="div" to="/contact" class="way-link">网站地图</router-link>
						<div class="line">|</div>
						<router-link tag="div" to="/contact" class="way-link">联系我们</router-link>
					</div>
				</div>
				<div class="way-right">
					<router-link tag="div" to="/contact" class="way-btn">
						<img src="../../static/images/components/u604.png" alt="">
						加入我们
					</router-link>
					<router-link tag="div" to="/contact" class="way-btn">
						<img src="../../static/images/components/u608.png" alt="">
						企业邮箱
					</router-link>
				</div>
			</div>
			<div class="copright">
				CopyrightO2017.YONG Yi Group | All rights reserved备案号:蜀ICP备11019746号网站设计:赛门仕博
			</div>
		</div>
		<div class="right">
				<div class="code">
					<img src="../../static/images/components/u615.png" alt="">
					<p>煊赫微信公众号</p>
				</div>
				<a class='top' href="#">
					<img src="../../static/images/components/u613.png" alt="">
				</a>
			
		</div>
	</div>
</template>

<script>
	export default {
		name:"xhfooter",
		data(){
			return{
				navlist:[
					{
						name:"首页",
						href:"/"
					},
					{
						name:"产品中心",
						href:"/"
					},
					{
						name:"关于煊赫",
						href:"/about"
					},
					{
						name:"新闻中心",
						href:"/"
					},
					{
						name:"联系我们",
						href:"/contact"
					}
				]
			}
		},
		props:{
			curIndex:{
					type:Number,
					default:0
				}
		}
	}
</script>

<style lang="scss" scoped>
	#xhfooter>>>{
		background: #eee;
		display:flex;
		justify-content: space-between;
		padding:.4rem 1.5rem .7rem;
		.left,.right{
			flex:1;
		}
		.left{
			font-size: .14rem;
			color:#aaa;
			line-height: .34rem;
			nav{
				display:flex;
				justify-content: space-between;
				font-size:.2rem;
				margin:.2rem 0;
				color:#000;
				div:hover{
					color:#ccc;
					cursor:pointer
				}
			}
			.address{
				margin-top:.4rem 0;
			}
			.way{
				display:flex;
				margin-bottom:.4rem;
				.way-left{
					div{
						display:flex;
						.way-link:hover{
							color:#000;
							cursor:pointer;
						}
						.line{
							margin:0 .1rem;
						}
					}
				}
				.way-right{
					display:flex;
					align-items: flex-end;
					margin-left:.2rem;
					.way-btn{
						width:1.39rem;
						height: .44rem;
						display:flex;
						justify-content: center;
						align-items: center;
						border:1px solid #ccc;
						border-radius:.05rem;
						margin:0 .1rem;
						&:hover{
							color:#000;
							cursor:pointer;
							border:1px solid #000;
						}
						img{
							width: 1.2em;
							margin-right:.1rem;
						}
					}
					
				}
			}
			.copright{
				font-size:.1rem;
			}
		}
		.right{
			display:flex;
			justify-content: flex-end;
			align-items: center;
			.code{
				img{
					width: 1.58rem;
				}
				p{
					text-align:center;
					line-height: .32rem;
					line-height: .18rem;
					color:#aaa;
					
				}
			}
			.top{
				border-radius:1rem;
				overflow: hidden;
				margin-left:.4rem;
				img{
					width: .49rem;
					height: 1.6rem;
				}
			}
		}
	}
</style>
