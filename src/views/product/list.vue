<template>
	<div id="list">
		<xhheader curIndex=1></xhheader>
		<div class='giant'>
			<div class="tabBox">
				<el-tabs v-model="activeName" @tab-click="handleClick">
					<el-tab-pane v-for="(item,index) in list" :label="item.label" :name="item.name" :key='index'>
						<ul class="every-list">
							<li v-for="subItem,subIndex in item.productList" :key='subIndex'>
								<div class="giao">
									<div class="top">
										<img :src="subItem.img" alt="" />
									</div>
									<div class="bottom">
										<div class="content">
											<div class="left">
												<p>{{subItem.title}}</p>
												<p>{{subItem.disc}}</p>
											</div>
											<div class="text">
												<p>空气净化器家用办公卧室负离子除甲醛雾霾二手<br />烟pm2.5除烟尘氧吧</p>
											</div>
											<router-link to="/listwei" class="more">
												MORE
												<div></div>
											</router-link tag="div">
										</div>
									</div>
								</div>

							</li>
						</ul>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
		<div class="block">
			<el-pagination layout="prev, pager, next" :total="1000">
			</el-pagination>
		</div>
		<xhfooter></xhfooter>
	</div>
</template>

<script>
	import xhheader from '@/components/xh-header.vue'
	import xhfooter from '@/components/xh-footer.vue'
	export default {
		name:"list",
		data() {
			return {
				activeName: 'second',
				list: []
			};
		},
		methods: {
			handleClick(tab, event) {
				console.log(tab, event);
			}
		},
		created() {
			this.$axios({
				methods: 'get',
				url: '/static/data/product.json'
			}).then((data) => {
				//	    		console.log(data)
				this.list = data.data;
				console.log(this.list)
			})
		},
		components:{
			xhheader,xhfooter
		}
	}
</script>

<style scoped lang="scss">
	#list>>>{
		background-color: #E7E7E7;
		.el-tabs__nav-scroll{
			display:flex;
			justify-content: center;
			margin-top:.2rem;
			.el-tabs__active-bar{
				display:none;
			}
			.el-tabs__item{
				text-align:center;
			}
			.el-tabs__item.is-active{
				background:url(../../../static/images/product/u1029.png);
				background-size:100% 100%;
				border:none;
				color:#fff;
			}
		}
		.every-list{
			display:flex;
			justify-content: space-around;
			@media screen and (max-width:768px) {
				flex-direction: column;
				align-items: center;
			}
			.giao {
				
				background-color: #fff;
				width: 3rem;
				overflow: hidden;
				padding:.2rem 0;
				margin:.2rem;
				display:flex;
				flex-direction: column;
				align-items: center;
				@media screen and (max-width:768px) {
					width:80vw;
				}
				.top {
					display:flex;
					justify-content: center;
					background:url(../../../static/images/news/u189.png);
					background-size: cover;
					img {
						width: 60%;
						margin:0 auto;
					}
				}
				.bottom{
					.content {
						font-family: monospace;
						margin: 0.32rem 0.32rem 0.25rem 0.22rem;
						.left p:first-child {
							font-size: 0.2rem;
						}
						.left p:nth-of-type(2) {
							font-size: 0.13rem;
							margin-top: 0.16rem;
							margin-bottom: 0.35rem;
							border-bottom: 1px solid #7c4e23;
							display: inline-block;
						}
						.text p {
							font-size: 0.16rem;
							color: rgb(102, 102, 102);
						}
						
						.more {
							display:flex;
							justify-content: center;
							align-items: center;
							padding:.05rem .1rem;
							border: 1px solid #7c4e23;
							border-radius: 0.3rem;
							color: rgb(124, 78, 35);
							text-align: center;
							float: right;
							margin-top: 0.17rem;
							div {
								margin-left:.1rem;
								border-left: 12px solid #7c4e23;
								border-top: 6px solid transparent;
								border-bottom: 6px solid transparent;
							}
						}
					}
				}
			}
		}
		.block{
			margin:.2rem ;
			display: flex;
			justify-content: center;
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
</style>