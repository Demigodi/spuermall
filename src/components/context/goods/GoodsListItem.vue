<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="">
    <div class="goods-info">
      <p> {{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">
        <img src="~assets/img/common/collect.svg">
        {{goodsItem.cfav}}
      </span>
    </div>
  </div>
</template>

<script>
    export default {
        name: "GoodsListItem",
      props: {
          goodsItem : {
            type: Object,
            default() {
              return {}
            }
          }
      }
    }
</script>

<style scoped>

  .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }


  .price {
    color: #ff8198;
    text-align: right;
    width: 50%;
  }

  .collect {
    width: 50%;
    text-align: left;
  }

  .collect img {
    width: 10px;
    height: 10px;
  }
</style>
