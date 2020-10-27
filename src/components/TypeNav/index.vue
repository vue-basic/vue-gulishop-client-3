<template>
     <!-- 商品分类导航 -->
        <div class="type-nav">
            <div class="container">
                <div @mouseleave="moveOutDiv" @mouseenter="moveInDiv">
                    <h2 class="all">全部商品分类</h2>
                    <transition name="show">
                             <div class="sort" v-show="isShow">
                    <div class="all-sort-list2" @click="toSearch">
                        <div class="item" v-for="(c1,index) in categoryList" 
                        :key="c1.categoryId"
                        :class="{item_on:currentIndex === index}"
                        @mouseenter="moveIn(index)"
                        >
                            <h3>
                                <!-- <a href="">图书、音像、数字商品</a> -->
                                <!-- <a href="javascript:;">{{c1.categoryName}}</a> -->
                                <!-- <router-link :to="{name:'search',query:{categoryName:c1.categoryName,categoryId:c1.categoryId}}">{{c1.categoryName}}</router-link> -->
                                <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryName:c1.categoryName,categoryId:c1.categoryId}})">{{c1.categoryName}}</a> -->
                                <a href="javascript:;" :data-categoryName="c1.categoryName" :data-categoryId="c1.categoryId">{{c1.categoryName}}</a>
                            </h3>
                            <div class="item-list clearfix">
                                <div class="subitem">
                                    <dl class="fore"v-for="(c2, index) in c1.categoryChild" :key="c2.categoryId" >
                                        <dt>
                                            <!-- <a href="">电子书</a> -->
                                            <!-- <a href="javascript:;">{{c2.categoryName}}</a> -->
                                <!-- <router-link :to="{name:'search',query:{categoryName:c2.categoryName,categoryId:c2.categoryId}}">{{c2.categoryName}}</router-link> -->
                                 <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryName:c2.categoryName,categoryId:c2.categoryId}})">{{c2.categoryName}}</a> -->

                                <a href="javascript:;" :data-categoryName="c2.categoryName" :data-categoryId="c2.categoryId">{{c2.categoryName}}</a>

                                        </dt>
                                        <dd>
                                            <em v-for="(c3,index) in c2.categoryChild" :key="c3.categoryId">
                                                <!-- <a href="">婚恋/两性</a> -->
                                                <!-- <a href="javascript:;">{{c3.categoryName}}</a> -->
                                <!-- <router-link :to="{name:'search',query:{categoryName:c3.categoryName,categoryId:c3.categoryId}}">{{c3.categoryName}}</router-link> -->
                                <!-- <a href="javascript:;" @click="$router.push({name:'search',query:{categoryName:c3.categoryName,categoryId:c3.categoryId}})">{{c3.categoryName}}</a> -->

                                <a href="javascript:;" :data-categoryName="c3.categoryName" :data-categoryId="c3.categoryId">{{c3.categoryName}}</a>

                                            </em>
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                        </div>
                    </div>
                     </div>
               
                    </transition>
               
                </div>
                
                <nav class="nav">
                    <a href="###">服装城</a>
                    <a href="###">美妆馆</a>
                    <a href="###">尚品汇超市</a>
                    <a href="###">全球购</a>
                    <a href="###">闪购</a>
                    <a href="###">团购</a>
                    <a href="###">有趣</a>
                    <a href="###">秒杀</a>
                </nav>
                
            </div>
        </div>
</template>

<script>
import { mapState } from "vuex";
import throttle from "lodash/throttle";
export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },
  mounted() {
    // 挂载完成后(模板挂载完成后,模板变成真正的dom后)

    // 判断TypeNav组件是在home页还是在Search页
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }
    // this.getCategoryList();
  },
  methods: {
    getCategoryList() {
      this.$store.dispatch("getCategoryList");
    },

    moveIn: throttle(
      function (index) {
        console.log(index);
        this.currentIndex = index;
      },
      100,
      { trailing: false }
    ),

    moveInDiv() {
      this.isShow = true;
    },
    moveOutDiv() {
      this.currentIndex = -1;

      // 判断TypeNav组件在home页还是在search页  如果是search页那么我们要首先隐藏三级分类列表
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },

    toSearch(event) {
      let target = event.target;
      let data = target.dataset;

      console.log(data);

      let { categoryname, category1id, category2id, category3id } = data;
      if (categoryname) {
        let location = {
          name: "search",
        };

        let query = {
          categoryName: categoryname,
        };

        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }

        location.query = query;

        let {params} = this.$route
        if(params){
            location.params = params
        }
        this.$router.push(location);
      }
    },
  },
  computed: {
    // 没有使用模块化开发

    // 1.数组写法
    // ...mapState(['TypeNav'])

    // 2.本质写法
    // categoryList(){
    //     return this.$store.state.categoryList
    // }

    // 3.对象写法
    // ...mapState({
    //     categoryList(){
    //         return this.$store.state.categoryList
    //     }
    // })

    // 4.使用模块化开发
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
};
</script>

<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: skyblue;
      z-index: 999;

      &.show-enter{
          opacity: 0;
          height: 0;
      }

      &.show-enter-active{
          transition: all 3s;
      }

      &.show-enter-to{
          opacity: 1;
          height: 461px;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 615px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.item_on {
            background-color: hotpink;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>