<template>
<<<<<<< HEAD
  <div id="app">
    <xhheader curIndex=3></xhheader>
    <el-row>
      <div class="TabControl">
        <template>
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="新闻中心" name="first">
              <div class="classify1">
                <div class="classify1Top">
                  <router-link to="./detail" tag="div">
                    <div class="classify1Left">
                      <img src="../../../static/images/news/u40.jpg" alt="">
                    </div>
                  </router-link>
                  <router-link to="./detail" tag="div">
                    <div class="classify1Right">
                      <p class="classify1Title">煊赫公司、泰橡集团达成战略合作伙伴关系共同改革发展</p>
                      <p class="classify1Content">原外经贸部副部长，原博鳌亚洲论坛理事、秘书长全球CEO发展大会联合主席中国与全球化智库主席龙永图席了本次峰会望可以促成泰国乳胶床品在国内市场的长远发展，让更多中国消费者享受到纯正的泰国乳胶...</p>
                      <div class="classify1Bot">
                        <div>2019-08-22</div>
                        <div>企业</div>
                        <div class="more">
                          <p>MORE</p>
                        </div>
                      </div>
                    </div>
                  </router-link>
                </div>
                <!-- 商品列表 -->
                <ul class="ListItem">
                  <router-link to="./detail" tag="div">
                    <li v-for="(item,index) in list1" :key="'c1'+index">
                      <div>
                        <img :src="item.img" alt="">
                      </div>
                      <div class="ItemBottom">
                        <h3>{{item.biaoti}}</h3>
                        <p class="riqi">{{item.riqi}}</p>
                        <p>{{item.info}}</p>
                        <div class="ItemMore">
                          <p>{{item.more}}</p>
                        </div>
                      </div>
                    </li>
                  </router-link>
                </ul>
                <!-- 引入elementUI分页组件 -->
                 <div class="block">
                  <el-pagination layout="prev, pager, next" :total="200">
                  </el-pagination>
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane label="行业动态" name="second">
              <div class="classify1Top">
                <router-link to="./detail">
                  <div class="classify1Left">
                    <img src="../../../static/images/news/u203.png" alt="">
                  </div>
                </router-link>
                <router-link to="./detail" tag="div">
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
                </router-link>
              </div>
              <ul class="ListItem">
                <router-link to="./detail" tag="div">
                  <li v-for="item,index in list2" :key="'c2'+index">
                    <div>
                      <img :src="item.img" alt="">
                    </div>
                    <div class="ItemBottom">
                      <h3>{{item.biaoti}}</h3>
                      <p class="riqi">{{item.riqi}}</p>
                      <p>{{item.info}}</p>
                      <div class="ItemMore">
                        <p>{{item.more}}</p>
                      </div>
                    </div>
                  </li>
                </router-link>
              </ul>
              <!-- 引入分页组件 -->
              <div class="block">
                <el-pagination layout="prev, pager, next" :total="200">
                </el-pagination>
              </div>
            </el-tab-pane>
          </el-tabs>
        </template>
=======
	<div id="app">
		<xhheader curIndex=3></xhheader>
		<el-row>
			<div class="TabControl">
				<template>
					<el-tabs v-model="activeName" @tab-click="handleClick">
						<el-tab-pane label="新闻中心" name="first">
							<div class="classify1">
								<div class="classify1Top">
									<router-link to="./detail" tag="div">
										<div class="classify1Left">
											<img src="../../../static/images/news/u40.jpg" alt="">
										</div>
									</router-link>
									<router-link to="./detail" tag="div">
										<div class="classify1Right">
											<p class="classify1Title">煊赫公司、泰橡集团达成战略合作伙伴关系共同改革发展</p>
											<p class="classify1Content">原外经贸部副部长，原博鳌亚洲论坛理事、秘书长全球CEO发展大会联合主席中国与全球化智库主席龙永图席了本次峰会望可以促成泰国乳胶床品在国内市场的长远发展，让更多中国消费者享受到纯正的泰国乳胶...</p>
											<div class="classify1Bot">
												<div>2019-08-22</div>
												<div>企业</div>
												<div class="more">
													<p>MORE</p>
												</div>
											</div>
										</div>
									</router-link>
								</div>
								<!-- 商品列表 -->
								<ul class="ListItem">
									<router-link to="./detail" tag="div">
										<li v-for="(item,index) in list1" :key="'c1'+index">
											<div>
												<img :src="item.img" alt="">
											</div>
											<div class="ItemBottom">
												<h3>{{item.biaoti}}</h3>
												<p class="riqi">{{item.riqi}}</p>
												<p>{{item.info}}</p>
												<div class="ItemMore">
													<p>{{item.more}}</p>
												</div>
											</div>
										</li>
									</router-link>
								</ul>
								<!-- 引入elementUI分页组件 -->
								<div class="block">
									<el-pagination layout="prev, pager, next" :total="200">
									</el-pagination>
								</div>
							</div>
						</el-tab-pane>
						<el-tab-pane label="行业动态" name="second">
							<div class="classify1Top">
								<router-link to="./detail">
									<div class="classify1Left">
										<img src="../../../static/images/news/u203.png" alt="">
									</div>
								</router-link>
								<router-link to="./detail" tag="div">
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
								</router-link>
							</div>
							<ul class="ListItem">
								<router-link to="./detail" tag="div">
									<li v-for="item,index in list2" :key="'c2'+index">
										<div>
											<img :src="item.img" alt="">
										</div>
										<div class="ItemBottom">
											<h3>{{item.biaoti}}</h3>
											<p class="riqi">{{item.riqi}}</p>
											<p>{{item.info}}</p>
											<div class="ItemMore">
												<p>{{item.more}}</p>
											</div>
										</div>
									</li>
								</router-link>
							</ul>
							<!-- 引入分页组件 -->
							<div class="block">
								<el-pagination layout="prev, pager, next" :total="200">
								</el-pagination>
							</div>
						</el-tab-pane>
					</el-tabs>
				</template>
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee

			</div>
		</el-row>
		<xhfooter></xhfooter>
	</div>
</template>

<script>
<<<<<<< HEAD
  import xhheader from '@/components/xh-header.vue'
  import xhfooter from '@/components/xh-footer.vue'
  export default {
    name: "news",
    data() {
      return {
        activeName: 'first',
        newsData: {},
        list1: [],
        list2: []
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
        this.list1 = res.data.classify1.contentList
        this.list2 = res.data.classify2.contentList
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
=======
	import xhheader from '@/components/xh-header.vue'
	import xhfooter from '@/components/xh-footer.vue'
	export default {
		name: "news",
		data() {
			return {
				activeName: 'first',
				newsData: {},
				list1: [],
				list2: []
			}
		},
		methods: {
			handleClick(tab, event) {
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee

			}
		},
		created() {
			this.$axios.get('../../../../static/data/pressCenter.json').then((res) => {
				this.newsData = res.data
				this.list1 = res.data.classify1.contentList
				this.list2 = res.data.classify2.contentList
				console.log(res.data)
			}).catch((err) => {
				console.log(err)
			})

		},
		mounted() {

		},
		components: {
			xhheader,
			xhfooter
		}
	}
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
  #app>>> {
    background-color: rgb(242, 242, 242);

    .TabControl {
      width: 70vw;
      margin: 0 auto;

      .classify1Top {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin: 0.2rem 0;

        .classify1Left {
          width: 6rem;
          min-height: 4.2rem;

          img {
            width: 100%;
            min-height: 4.2rem;
          }
        }

        .classify1Right {
          max-width: 5.9rem;
          min-height: 4.2rem;
          padding: 0.45rem 0.2rem;
          background: #fff;
          box-sizing: border-box;

          .classify1Title {
            color: rgb(124, 78, 35);
            font-size: 18px;
            margin: 0.2rem 0;
          }

          .classify1Content {
            font-size: 13px;
            line-height: 0.3rem;
          }

          .classify1Bot {
            margin-top: 0.2rem;
            color: #CCCCCC;

            div {
              display: inline-block;
              padding-right: 0.1rem;
            }
          }

          .more p {
            margin-left: 2rem;
            width: 0.6rem;
            height: 0.2rem;
            text-align: center;
            line-height: 0.2rem;
            border-radius: 0.1rem;
            border: 1px solid rgb(124, 78, 35);
            color: rgb(124, 78, 35);
          }
        }
      }

      .ListItem {
        max-width: 1194px;
        margin-top: 0.5rem;

        div {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        }

        li {
          display: inline-block;
          width: 3.8rem;
          // height: 4.4rem;
          min-width: 322px;
          margin: 0.2rem 0;
          background-color: #FFFFFF;

          img {
            width: 100%;
            height: 100%;
            overflow: hidden;
          }

          .ItemBottom {
            padding: 0.1rem;
            line-height: 24px;
=======
	#app>>> {
		background-color: rgb(242, 242, 242);

		.TabControl {
			width: 70vw;
			margin: 0 auto;
			@media screen and (max-width: 768px) {
				width:90vw;
			}

			.classify1Top {
				width: 100%;
				display: flex;
				flex-wrap: wrap;
				margin: 0.2rem 0;

				.classify1Left {
					min-height: 4.2rem;
					img {
						width: 100%;
					}
				}

				.classify1Right {
					min-height: 4.2rem;
					padding: 0.45rem 0.2rem;
					background: #fff;
					box-sizing: border-box;

					.classify1Title {
						color: rgb(124, 78, 35);
						font-size: 18px;
						margin: 0.2rem 0;
					}

					.classify1Content {
						font-size: 13px;
						line-height: 0.3rem;
					}

					.classify1Bot {
						margin-top: 0.2rem;
						color: #CCCCCC;

						div {
							display: inline-block;
							padding-right: 0.1rem;
						}
					}

					.more p {
						margin-left: 2rem;
						width: 0.6rem;
						height: 0.2rem;
						text-align: center;
						line-height: 0.2rem;
						border-radius: 0.1rem;
						border: 1px solid rgb(124, 78, 35);
						color: rgb(124, 78, 35);
					}
				}
			}

			.ListItem {
				max-width: 1194px;
				margin-top: 0.5rem;

				div {
					display: flex;
					justify-content: space-between;
					flex-wrap: wrap;
				}

				li {
					display: inline-block;
					width: 3.8rem;
					// height: 4.4rem;
					min-width: 322px;
					margin: 0.2rem 0;
					background-color: #FFFFFF;

					img {
						width: 100%;
						height: 100%;
						overflow: hidden;
					}

					.ItemBottom {
						padding: 0.1rem;
						line-height: 24px;
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee

						h3 {
							font-size: 20px;
						}

						.riqi {
							color: #CCCCCC;
						}

<<<<<<< HEAD
            .ItemMore p {
              width: 0.6rem;
              height: 0.2rem;
              margin-top: 0.1rem;
              text-align: center;
              line-height: 0.2rem;
              border-radius: 0.1rem;
              border: 1px solid rgb(124, 78, 35);
              color: rgb(124, 78, 35);
            }
          }
        }
      }

      .block {
        text-align: center;
        background-color: rgb(242, 242, 242);
        margin-bottom: 0.2rem;
      }
    }
  }
=======
						.ItemMore p {
							width: 0.6rem;
							height: 0.2rem;
							margin-top: 0.1rem;
							text-align: center;
							line-height: 0.2rem;
							border-radius: 0.1rem;
							border: 1px solid rgb(124, 78, 35);
							color: rgb(124, 78, 35);
						}
					}
				}
			}

			.block {
				text-align: center;
				background-color: rgb(242, 242, 242);
				margin-bottom: 0.2rem;
			}
		}
	}
>>>>>>> 17237a82fe82faa08d7f92eb9581002eb87cf4ee
</style>
