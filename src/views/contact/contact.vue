<template>
	<div id="contact">
		<xhheader curIndex=4></xhheader>
		<section>
			<div class="title">
				<h1>北京煊赫电子商务有限公司</h1>
				<h3>与我们保持联系，是解决您一切问题的有效途径</h3>
			</div>
			<div class="way">
				<div class="way-item">
					<i class="el-icon-phone"></i>
					<div>
						<h5>联系电话</h5>
						<p>136-5368-9893</p>
					</div>
				</div>
				<div class="line"></div>
				<div class="way-item">
					<i class="el-icon-location"></i>
					<div>
						<h5>联系地址</h5>
						<p>北京市大兴区金苑路32号院3号</p>
					</div>
				</div>
				<div class="line"></div>
				<div class="way-item">
					<i class="el-icon-message"></i>
					<div>
						<h5>服务邮箱</h5>
						<p>89893@163.com</p>
					</div>
				</div>
			</div>
			<div class="map">
				<bdmap></bdmap>
			</div>
		</section>
		<xhfooter></xhfooter>
	</div>
</template>

<script>
	import xhheader from '../../components/xh-header.vue'
	import xhfooter from '../../components/xh-footer.vue'
	import bdmap from '../../components/map.vue'
	export default {
		name:"contact",
		data(){
			return{
				
			}
		},
		components:{
			xhheader,xhfooter,bdmap
		}
	}
</script>

<style lang="scss" scoped>
	#contact>>>{
		section{
			text-align: center;
			.title{
				background:url(../../../static/images/components/u1092.png) center center no-repeat;
				background-size:auto 100%;
				margin:.66rem 0 .8rem;
				h1{
					line-height: 1.2rem;
					font-size:.45rem;
					color:#7e4e23;
				}
				h3{
					font-size:.36rem;
				}
			}
			.way{
				display:flex;
				justify-content: space-around;
				align-items: center;
				.way-item{
					width: 3.45rem;
					i{
						font-size:.8rem;
						margin:.2rem;
					}
					div{
						h5{
							font-size:.36rem;
							line-height: .7rem;
						}
						p{
							font-size:.28rem;
							color:#aaa;
						}
					}
					
				}
				.line{
					height:.84rem;
					border-left:1px solid #7e4e23;
					display:flex;
					align-items: center;
					&:before{
						display:block;
						content:"";
						border:.06rem solid transparent;
						border-left-color:#7e4e23;
					}
				}
			}
			.map{
				margin:1.2rem 0 .6rem;
			}
		}
	}
</style>
