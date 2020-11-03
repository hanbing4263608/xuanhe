<template>
	<div id="about">
		<xhheader curIndex=2></xhheader>
		<section>
			<button @click="qh">切换 </button>
			<div class="title">
				<h1>{{$t("message.title")}}</h1>
			</div>
			<article>
				<p v-for="item in $t('message.describe')">{{item}}</p>
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
		},
		methods:{
			qh(){
				this.$i18n.locale = this.$i18n.locale == 'cn' ? 'en' : 'cn';
			}
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
