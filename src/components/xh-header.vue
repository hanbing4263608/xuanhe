<template>
	<header id="xhheader">
		<el-row class="top">
			<el-col :span="2">
				<el-button icon="el-icon-more" @click="listclick" class="btn"  type="info"></el-button>
			</el-col>
			<el-col class="log" :span="3">
				<img src="../../static/images/components/u9.png" alt="">
			</el-col>
			<el-col class="nav" :span="18" ref="navlist">
				<router-link tag="div" :to="item.href" v-for="(item,index) in navlist" :class="{active:index == curIndex}" :key="'headNav'+index">
					{{item.name}}
				</router-link>
			</el-col>
			<el-col class="way" :span="3">
				<router-link to="/contact"><img src="../../static/images/components/u19.png" alt=""></router-link>
				<router-link to="/contact"><img src="../../static/images/components/u20.png" alt=""></router-link>
				<router-link to="/contact"><img src="../../static/images/components/顶部_u18.png" alt=""></router-link>
			</el-col>
		</el-row>
		<div class="bottom">
			<img src="../../static/images/components/u1079.png" alt="">
			<p class="text">{{navlist[curIndex].name}}</p>
		</div>
	</header>
</template>

<script>
	export default {
		name:"xhheader",
		data(){
			return{
				listShow:false,
				navlist:[
					{
						name:"首页",
						href:"/"
					},
					{
						name:"产品中心",
						href:"/list"
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
					type:[Number,String],
					default:0
				}
		},
		methods:{
			listclick(){
				this.listShow = !this.listShow;
				this.$refs.navlist.$el.style.display = this.listShow ? 'flex' : 'none' ;
			}
		}
	}
</script>

<style lang="scss" scoped>
	#xhheader>>>{
		.btn{
			height:.6rem;
			width:.8rem;
			justify-content: center;
			align-items: center;
			padding:0;
			display:none;
		}
		.top{
			height:1.1rem;
			display:flex;
			align-items: center;
			padding:0 .2rem;
			.log{
				img{
					height:.65rem;
					width:1.32rem;
				}	
			}
			.nav{
				display:flex;
				justify-content: center;
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
				min-width: 1.6rem;
				img{
					height: .25rem;
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
		@media screen and (max-width: 1125px){
			.top{
				height:.8rem;
				justify-content: space-around;
				.log{
					img{
						height:.3rem;
						width:.48rem;
					}
				}
				.nav{
					padding:0 .34rem;
					font-size:.14rem;
					div{
						height:.8rem;
					}
				}
				.way{
					img{
						height: .15rem;
						
					}
				}
			}
		}
		@media screen and (max-width: 1080px){
			.top{
				justify-content: space-between;
				padding-right:1rem;
				.btn{
					display:block;
				}
				.nav{
					position: absolute;
					display:flex;
					flex-direction: column;
					z-index:2;
					background: rgb(227,226,240);
					padding:0;
					left:.3rem;
					top:.8rem;
					width:2rem;
					display:none;
					div{
						padding:0;
						display:flex;
						justify-content: center;
					}
				}
			}
		}
	}
</style>
