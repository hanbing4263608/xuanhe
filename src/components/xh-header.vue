<template>
	<header id="xhheader">
		<el-row class="top">
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
			<el-col :span="2" class="btn" >
				<div @click="listclick"  ><i class="el-icon-s-grid"></i></div>
			</el-col>
		</el-row>
		<div class="bottom">
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
	@keyframes jump {
		0%{
			transform: translateY(0);
		}
		50%{
			transform: translateY(-10px);
		}
		100%{
			transform: translateY(0);
		}
	}
	#xhheader>>>{
		.top{
			width: 100vw;
			height:.7rem;
			display:flex;
			justify-content: space-between;
			align-items: center;
			.btn{
				display:none;
				font-size:.42rem;
				color:#aaa;
				align-items: flex-start;
			}
			.log{
				padding:0 .5rem;
				img{
					height:.42rem;
					width:.82rem;
				}	
			}
			.nav{
				display:flex;
				justify-content: center;
				font-size:.18rem;
				div{
					padding:0 .34rem;
					height:.7rem;
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
				width: 1.2rem;
				display:flex;
				justify-content: space-between;
				img{
					height: .18rem;
					margin:0 .1rem;
					&:hover{
						animation:jump .6s infinite;
					}
				}
			}
		}
		.bottom{
			position:relative;
			height:.7rem;
			background: url(../../static/images/components/u1079.png);
			background-size:cover;
			.text{
				font-size: .2rem;
				color:#fff;
				width:2rem;
				line-height: .4rem;
				margin:-.2rem -1rem;
				position:absolute;
				top:50%;
				left:50%;
				display:flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}
		}
		
		@media screen and (max-width: 768px){
			.top{
				.btn{
					display:flex;
				}
				.nav{
					width:100vw;
					position: absolute;
					display:flex;
					flex-direction: column;
					z-index:10000;
					background: rgb(227,226,240);
					padding:0;
					left:.0;
					top:.7rem;
					display:none;
					div{
						padding:0;
						display:flex;
						justify-content: center;
					}
				}
				.way{
					display:none;
				}
			}
		}
	}
</style>
