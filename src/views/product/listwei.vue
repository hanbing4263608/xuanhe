<template>
	<div class='box'>
		<xhheader curIndex=1></xhheader>
		<img src="../../../static/images/product/u1027.png" alt="" />
		<div class='small'>
			当前位置：  
			<a href="">首页 ></a>
			<a href="">产品中心 ></a>释压按摩进口乳胶枕
		</div>
		<div class="big">进一步了解></div>
		<img src="../../../static/images/product/u1026.png" alt="" />
		<xhfooter></xhfooter>
	</div>
</template>

<script>
	import xhheader from '@/components/xh-header.vue'
	import xhfooter from '@/components/xh-footer.vue'
	export default{
		components:{
			xhheader,xhfooter
		}
	}
</script>

<style scoped>
	.box{
		position:relative;
	}
	img{
		width: 100%;
	}
	.small{
		position: absolute;
		left:1rem;
		top:7.5rem;
		width:4.18rem;
		height:0.18rem;
	}
	a{
		font-family: MicrosoftYaHeiLight;
		color:rgb(153,153,153);
	}
	.big{
		width: 1.34rem;
		height: 0.51rem;
		text-align: center;
		line-height: 0.51rem;
		color:#fff;
		position: absolute;
		left:1rem;
		top:13.5rem;
		background:url(../../../static/images/product/u1029.png);
	}
</style>