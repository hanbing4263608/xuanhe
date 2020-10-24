<template>
	<div id="xhheader">
		<div class="top">
			<div class="log">
				<img src="../../static/images/components/u9.png" alt="">
			</div>
			<div class="nav">
				<router-link tag="div" :to="item.href" v-for="(item,index) in navlist" :class="{active:index == curIndex}" :key="'headNav'+index">
					{{item.name}}
				</router-link>
			</div>
			<div class="way">
				<router-link to="/contact"><img src="../../static/images/components/u19.png" alt=""></router-link>
				<router-link to="/contact"><img src="../../static/images/components/u20.png" alt=""></router-link>
				<router-link to="/contact"><img src="../../static/images/components/顶部_u18.png" alt=""></router-link>
			</div>
		</div>
		<div class="bottom">
			<img src="../../static/images/components/u1079.png" alt="">
			<p class="text">{{navlist[curIndex].name}}</p>
		</div>
	</div>
</template>

<script>
	export default {
		name:"xhheader",
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
						href:"/news"
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
	#xhheader>>>{
		.top{
			display:flex;
			justify-content: space-around;
			align-items: center;
			height:1.1rem;
			.log{
				img{
					height:.65rem;
					width:1.32rem;
				}	
			}
			.nav{
				display:flex;
				font-size:.24rem;
				div{
					padding:0 .34rem;
					height:1.1rem;
					display:flex;
					align-items: center;
					&:hover{
						background-color: #d4c5b7;
						color:#fff;
					}
					&.active{
						background-color: #d4c5b7;
						color:#fff;
					}
				}
			}
			.way{
				img{
					margin:0 .1rem;
				}
			}
		}
		.bottom{
			position:relative;
			img{
				width: 100%;
			}
			.text{
				font-size: .24rem;
				color:#fff;
				width:2rem;
				height:.8rem;
				line-height: .4rem;
				margin:-.4rem -1rem;
				position:absolute;
				top:50%;
				left:50%;
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
	}
</style>
