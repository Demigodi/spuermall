<template>
    <div class="wrapper" ref="warpper">
      <div class="content">
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
    export default {
        name: "Scroll",
      components: {
          BScroll
      },
      data() {
          return {
            scroll: null,
            message: '信息验证'
          }
      },
      mounted() {
        setTimeout(() => {
          this.scroll = new BScroll(this.$refs.warpper,{
            probeType: 3
          })
          this.scroll.on('scroll', (position) => {
            console.log(position)
          })
          this.scroll.on('pullingUp',() => {
            console.log('上拉加载更多');
          })
        },20)
      },
      methods: {
          scrollTo(x,y, time=300) {
            this.scroll.scrollTo(x,y,time)
          }
      }
    }
</script>

<style scoped>

</style>
