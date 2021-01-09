<template>
    <div id="home" >
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>

      <scroll class="content" ref="scroll">
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="['流行','新款','精选']"  class="tab-control" @tabClick="homeTabControlClick"/>
        <goods-list :goods="goodsType" ></goods-list>
      </scroll>

      <back-top @click.native="goBackTop" v-show="isShowTop"/>
    </div>
</template>

<script>
  import {getHomeMultidata,getHomeGoods} from "network/home";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/context/tabControl/TabControl";
  import GoodsList from "../../components/context/goods/GoodsList";
  import Scroll from "../../components/common/scroll/Scroll";
  import BackTop from "../../components/context/backTop/BackTop";

    export default {
        name: "Home",
      components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
      },
      data() {
          return {
            banners: [],
            recommends: [],

            goods: {
              'pop': {page: 0, list: []},
              'new': {page: 0, list: []},
              'sell': {page: 0, list: []}
            },
            currentType: 'pop'
          }
      },
      computed: {
        goodsType() {
          return this.goods[this.currentType].list
        },
        isShowTop() {
          return this.$refs.scroll.scroll.y < -200
        }
      },
      created() {

        this.getHomeMultidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
      },
      methods: {
        /**
         *
         */
        homeTabControlClick(index) {
          console.log(index)
          switch (index) {
            case 0:
              this.currentType = 'pop'
              break
            case 1:
              this.currentType = 'new'
              break
            case 2:
              this.currentType = 'sell'
              break
          }

        },
        goBackTop() {

          console.log(this.$refs.scroll.scroll)
          // this.$refs.scroll.scrollTo(0,0,500)
        },
        getHomeMultidata() {
          getHomeMultidata().then(
            res => {
              console.log(res)
              this.banners = res.data.banner.list
              this.recommends = res.data.recommend.list
            }
          )
        },
        getHomeGoods(type) {
          const page = this.goods[type].page
          getHomeGoods(type,page+1).then( res => {
            console.log(type)
            console.log(res)
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
          })
        }

      }
    }
</script>

<style scoped>
  #home {
    #padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: #ff8198;
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
  }

  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
    background-color: white;
  }

  .content {
    /*height: calc(100% - 93px);*/
    /*margin-top: 44px;*/

    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
  }


</style>
