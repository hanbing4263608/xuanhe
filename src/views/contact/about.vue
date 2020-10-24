<template>
	<div id="about">
		<xhheader curIndex="2"></xhheader>
		<section>
			<div class="title">
				<h1>北京煊赫电子商务有限公司</h1>
			</div>
			<article>
				<p>
					公司以“专注，用心，服务"为核心价值，通过我们的专业水平和不懈努力，为广 大消费者提供优质的服务。多年来，北京煊赫电子商务有限公司一直秉承以用户需求为核心，在专注以产品零售和批发行业为基础的同时，提供用心周到的服务，赢得了众多消费者的信赖和好评。
					 
				</p>
				<p>
					我们公司不仅仅提供专业细致的服务，同时还建立了完善的售后服务体系，我们公司主营业务乳胶系列产品赢得了众多消费者的青睐。我们相信，通过我们的不断努力和追求，一定能够实现互利共赢。而且我们非常重视培养人才，实行任人唯贤的人力资源政策，积极培养有理想、有道德、有责任感、有协作精神的现代化员工队伍，同时积极引进先进的管理理念，采用规范化、科学化的管理方法不断壮大自身实力。我们始终坚持人才与企业共同发展的理念， 关注员工的技能培训及发展并不断加强业文化的营建。
					 
				</p>
				<p>
					用心打交道，全心全意服务客户，公司业务得了持续高速发展，也为员工提供了极大的发展空间。多元化的企业文化、以人为本的经营管理理念证明了我们是一一个良好的发展平台。我们始终努力做一群因为谦逊、开放、努力而拥有真正自信的人。
				</p>
			</article>
			<div class='img'>
				<img src="../../../static/images/components/u1095.png" alt="">
			</div>
		</section>
		<xhfooter></xhfooter>
	</div>
</template>

<script>
	import xhheader from '../../components/xh-header.vue'
	import xhfooter from '../../components/xh-footer.vue'
	export default {
		name:"about",
		data(){
			return{
				
			}
		},
		components:{
			xhheader,xhfooter
		}
	}
</script>

<style lang="scss" scoped>
	#about>>>{
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
			}
			article{
				padding:.3rem 1rem .4rem;
				p{
					font-size:.2rem;
					line-height:.36rem;
					text-align:left;
					text-indent: 2em;
					margin-bottom:.36rem;
				}
			}
			.img{
				margin:0 1rem .8rem;
				img{
					width: 100%;
				}
			}
		}
	}
</style>
