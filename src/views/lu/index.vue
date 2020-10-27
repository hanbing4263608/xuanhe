<template>
  <div id='home'>
    <div class="leftBox">
      <img src="../../../static/images/home/2-big.jpg" alt="">
    </div>
    <div class="rightBox">
      <div class="rBoxTop">
        <img src="../../../static/images/home/AboutUs.png" alt="">
      </div>
      <div class="rBoxCen">
        <img src="../../../static/images/home/aboutbig.png" alt="">
      </div>
      <div class="rBoxBot">
        公司以"专注,用心,服务"为核心价值,通过我们的专业水平和不懈努力为广大消费者提供优质的服务。多年来,北京煊赫电子商务有限公司一直秉承以用户需求为核心,在专注以产品零售和批发行业为基础的同时,提供用心周到的服务,赢得了众多消费者的信赖和好评。
      </div>
      <div class="rBtn">more</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {

      }
    },
    methods: {},
    mounted() {

    },
  }
</script>

<style lang="scss" scoped>
  #home>>> {
    width: 10.50rem;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    margin: 0 auto;

    .leftBox{
      width: 50%;
      height: 100%;
      padding: 1.18rem 0rem;

      img{
        width: 84%;
        border-radius: 0.1rem;
      }
    }

    .rightBox{
      width: 4rem;
      height: 100%;
      padding: 0.1rem .56rem;
      box-sizing: border-box;

      .rBoxTop,.rBOxCen {
        width: 100%;
        margin-bottom: .38rem;

        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .rBoxBot {
        width: 100%;
        margin-top: 0.3rem;
        font-size: 0.14rem;
        line-height: 0.3rem;
        color: #ccc;
      }
      .rBtn {
        margin-top: 0.4rem;
        width: 1.2rem;
        height: 0.5rem;
        background-color: rgb(124,78,35);
        color: #FFFFFF;
        line-height: 0.5rem;
        font-size: 0.2rem;
        text-align: center;
        border-radius: 0.4rem;
      }
    }
  }
</style>
