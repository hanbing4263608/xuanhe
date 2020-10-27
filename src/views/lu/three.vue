<template>
  <ul class="threePage">
    <li>
      <div class="three-top">
        <div>
          <p class="p-opt opt1">乳胶制品</p>
          <p class="p-opt opt2">LATEX PRODUCT</p>
        </div>
        <img src="../../../static/images/home/rujiaoobj.png" alt="">
      </div>
      <div class="three-bot">
        <div>
          <div class="three-but-num">
            <p class="p-opt">LATEX</p>
            <p class="p-opt">PRODUCT</p>
          </div>
          <div class="three-more">
            <p class="p-opt">乳胶制品</p>
            <div class="p-btn">
              <span>MORE</span>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li>
      <div class="three-top">
        <div>
          <p class="p-opt opt1">智能产品</p>
          <p class="p-opt opt2">INTELLIGENT PRODUCT</p>
        </div>
        <img src="../../../static/images/home/zhinengobj.png" alt="">
      </div>
    </li>
    <li>
      <div class="three-top">
        <div>
          <p class="p-opt opt1">保健用品</p>
          <p class="p-opt opt2">HEALTH SUPPLIES</p>
        </div>
        <img src="../../../static/images/home/baojianobj.png" alt="">
      </div>
    </li>
    <li>
      <div class="three-top">
        <div>
          <p class="p-opt opt1">无纺布纸巾</p>
          <p class="p-opt opt2">NON-WOVEN TISSUE</p>
        </div>
        <img src="../../../static/images/home/wufangobj.png" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
</script>

<style lang="scss" scoped>
  .threePage {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    background: #ccc;

    li {
      height: 100vh;
      text-align: center;
      float: left;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      overflow: hidden;
      z-index: 20;
      background: #ccc;

      &:first-child {
        width: 40%;
      }

      &:nth-child(2) {
        width: 20%;
        background-color: rgb(191, 191, 191);
      }

      &:nth-child(3) {
        width: 20%;
      }

      &:nth-child(4) {
        width: 20%;
        background-color: rgb(191, 191, 191);
      }

      .three-top {
        width: 100%;
        margin-top: 1rem;

        div {
          margin-bottom: 3vh;

          p {
            color: white;
            padding: 8px 0px;
          }

          .opt1 {
            font-size: 30px;
          }

          .opt2 {
            font-size: 14px;
          }
        }

        img {
          width: 198px;
        }
      }

      .three-bot {
        width: 100%;
        height: 2rem;
        background: #e2e2e2;
        display: flex;
        align-items: center;
        color: #7c4123;
        left: 0;
        margin-top: 2.5rem;

        div {
          margin: 0 auto;

          .three-but-num {
            width: 100%;
            height: 126px;
            line-height: 63px;
            font-size: 40px;
            position: absolute;
            top: -40%;

            p {
              width: 100%;
              text-align: left;
              font-size: 40px;
            }
          }

          .three-more {
            width: 1rem;
            text-align: center;
            font-size: 25px;

            .p-btn {
              width: 100px;
              height: 40px;
              float: left;
              margin-top: 30px;
              background: #7c4123;
              border-radius: 20px;
              border: none;
              color: white;

              p {
                display: flex;
                color: white;
                justify-content: center;
                position: relative;
                z-index: 999;
                align-items: center;
                font-size: 14px;
              }
            }
          }
        }
      }
    }
  }
</style>
