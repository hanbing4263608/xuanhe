<template>
  <div id="news">
    <div class="header-top">
      <p>新闻中心</p>
      <p>NEWS CENTER</p>
    </div>
    <div class="TabControl">
      <template>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="新闻中心" name="first">
            <div class="classify1">
              <div class="classify1Top">
                <div class="classify1Left">
                  <img src="../../../static/images/news/u40.jpg" alt="">
                </div>
                <div class="classify1Right">
                  <p class="classify1Title">煊赫公司、泰橡集团达成战略合作伙伴关系共同改革发展</p>
                  <p class="classify1Content">原外经贸部副部长，原博鳌亚洲论坛理事、秘书长全球CEO发展大会联合主席中国与全球化智库主席龙永图席了本次峰会望可以促成泰国乳胶床品在国内市场的长远发展，
                    让更多中国消费者享受到纯正的泰国乳胶...</p>
                  <div class="classify1Bot">
                    <div>2019-08-22</div>
                    <div>企业</div>
                    <div class="more">
                      <p>MORE</p>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="ListItem">
                <li v-for="(itemData,index) in (newsData.classify1.contentList)" :key="index">
                  <div>
                    <img :src="itemData.img" alt="">
                  </div>
                  <div class="ItemBottom">
                    <h3>{{itemData.biaoti}}</h3>
                    <p class="riqi">{{itemData.riqi}}</p>
                    <p>{{itemData.info}}</p>
                    <div class="ItemMore">
                      <p>{{itemData.more}}</p>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- 引入分页组件 -->
              <div class="block">
                <el-pagination layout="prev, pager, next" :total="200">
                </el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="行业动态" name="second">
            <div class="classify1Top">
              <div class="classify1Left">
                <img src="../../../static/images/news/u203.png" alt="">
              </div>
              <div class="classify1Right">
                <p class="classify1Title">360牵手ORVIBO能在智能锁市场掀起多大波澜?</p>
                <p class="classify1Content">360牵手ORVIBO能在智能锁市场掀起多大波澜?","contentP":
                  "近日，互联网巨头360推出智能门锁新品的消息在朋友圈刷屏了，但细心的网友却发现这款新品的命名与之前360之前的命名似乎有些不太一样，在360后边赫然出现了“ORVIBO”几个英文字母。熟悉智能家居行业的网友都知道...</p>
                <div class="classify1Bot">
                  <div>2019-08-22</div>
                  <div>企业</div>
                  <div class="more">
                    <p>MORE</p>
                  </div>
                </div>
              </div>
            </div>
            <ul class="ListItem">
              <li v-for="itemData,index in newsData.classify2.contentList" :key="index">
                <div>
                  <img :src="itemData.img" alt="">
                </div>
                <div class="ItemBottom">
                  <h3>{{itemData.biaoti}}</h3>
                  <p class="riqi">{{itemData.riqi}}</p>
                  <p>{{itemData.info}}</p>
                  <div class="ItemMore">
                    <p>{{itemData.more}}</p>
                  </div>
                </div>
              </li>
            </ul>
            <!-- 引入分页组件 -->
            <div class="block">
              <el-pagination layout="prev, pager, next" :total="200">
              </el-pagination>
            </div>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    name: "news",
    data() {
      return {
        activeName: 'first',
        newsData: {}
      }
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event)
      }
    },
    created() {
      this.$axios.get('../../../../static/data/pressCenter.json').then((res) => {
        this.newsData = res.data
      }).catch((err) => {
        console.log(err)
      })

    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  #news>>> {
    background-color: rgb(242, 242, 242);

    .header-top {
      height: 132px;
      text-align: center;
      line-height: 64px;
      background-image: url(../../../static/images/news/u10.png);


      img {
        width: 100%;
      }

      p {
        color: #FFFFFF;
        font-size: 20px;
      }
    }

    .TabControl {
      padding: 50px;

      .el-tabs__nav {
        margin-left: 650px;
      }

      .classify1Top {
        display: flex;
        justify-content: space-between;

        .classify1Left img {
          width: 50vw;
        }

        .classify1Right {
          margin-left: 60px;
          padding: 30px;
          background-color: #FFFFFF;

          .classify1Title {
            color: rgb(124, 78, 35);
            font-size: 22px;
            margin: 50px 0;
          }

          .classify1Content {
            font-size: 13px;
            line-height: 30px;
          }

          .classify1Bot {
            margin-top: 100px;
            color: #CCCCCC;

            div {
              float: left;
              padding-right: 20px;
            }
          }

          .more p {
            position: absolute;
            right: 10px;
            width: 60px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            border-radius: 10px;
            border: 1px solid rgb(124, 78, 35);
            color: rgb(124, 78, 35);
          }
        }
      }


      .ListItem {
        margin-top: 0.5rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        li {
          width: 350px;
          float: left;
          margin-left: 0.4rem;
          margin-right: 0.8rem;
          background-color: #FFFFFF;
          margin-bottom: 0.5rem;

          img {
            width: 350px;
            height: 240px;

          }

          .ItemBottom {
            padding: 20px;
            line-height: 24px;

            h3 {
              font-size: 20px;
            }

            .riqi {
              color: #CCCCCC;
            }

            .ItemMore p {
              width: 60px;
              height: 20px;
              margin-top: 10px;
              text-align: center;
              line-height: 20px;
              border-radius: 10px;
              border: 1px solid rgb(124, 78, 35);
              color: rgb(124, 78, 35);
            }
          }
        }
      }

      .block {
        text-align: center;
        background-color: rgb(242,242,242);
      }
    }
  }
</style>
