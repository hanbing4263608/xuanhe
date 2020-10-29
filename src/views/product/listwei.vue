<template>
	<div class='box'>
		<xhheader curIndex=1></xhheader>
<<<<<<< HEAD
		<img src="../../../static/images/product/u1027.png" alt="" />
=======
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
		<div class='small'>
			当前位置：  
			<a href="">首页 ></a>
			<a href="">产品中心 ></a>释压按摩进口乳胶枕
		</div>
<<<<<<< HEAD
		<div class="big">进一步了解></div>
		<img src="../../../static/images/product/u1026.png" alt="" />
=======
		<img src="../../../static/images/product/u1027.png" alt="" />
		<div class="bottombox">
			<img src="../../../static/images/product/u1026.png" alt="" />
			<div class="btn">进一步了解></div>
		</div>
		
		
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
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

<<<<<<< HEAD
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
=======
<style scoped lang="scss">
	.box{
		
		position:relative;
		img{
			width: 100%;
		}
		.small{
			height:.4rem;
			line-height:.4rem;
			padding-left:.6rem;
			background: #eee;
			a{
				font-family: MicrosoftYaHeiLight;
				color:rgb(153,153,153);
			}
		}
		.bottombox{
			position: relative;
			.btn{
				width: 15vw;
				height:6vw;
				font-size:1vw;
				text-align: center;
				line-height:6vw;
				color:#fff;
				position: absolute;
				left: 10vw;
				bottom: 8vw;
				background:url(../../../static/images/product/u1029.png) no-repeat;
				background-size:100% 100%;
			}
		}
		
	}
	
	
	
	
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
</style>