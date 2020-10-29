<template>
	<header id="xhheader">
		<el-row class="top">
<<<<<<< HEAD
			<el-col :span="2">
				<el-button icon="el-icon-more" @click="listclick" class="btn"  type="info"></el-button>
			</el-col>
=======
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
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
<<<<<<< HEAD
=======
			<el-col :span="2" class="btn" >
				<div @click="listclick"  ><i class="el-icon-s-grid"></i></div>
			</el-col>
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
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
		.btn{
			height:.6rem;
			width:.8rem;
			justify-content: center;
			align-items: center;
			padding:0;
			display:none;
		}
		.top{
<<<<<<< HEAD
			height:1.1rem;
			display:flex;
			align-items: center;
			padding:0 .2rem;
=======
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
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
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
<<<<<<< HEAD
				font-size:.24rem;
=======
				font-size:.18rem;
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
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
<<<<<<< HEAD
				min-width: 1.6rem;
				img{
					height: .25rem;
=======
				width: 1.2rem;
				display:flex;
				justify-content: space-between;
				img{
					height: .18rem;
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
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
<<<<<<< HEAD
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
=======
		
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
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
					display:none;
					div{
						padding:0;
						display:flex;
						justify-content: center;
					}
				}
<<<<<<< HEAD
=======
				.way{
					display:none;
				}
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
			}
		}
	}
</style>
