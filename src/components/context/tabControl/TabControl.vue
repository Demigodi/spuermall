<template>
    <div class="tab-control">

      <div v-for="(item,index) in titles" class="tab-control-item"
           :class="{active: index === currentIndex}" @click="tabControlClick(index)">
        <span>{{item}}</span>
      </div>

    </div>
</template>

<script>
    export default {
        name: "TabControl",
      props: {
          titles: {
            type: Array,
            default() {
              return []
            }
          }
      },
      data() {
          return {
            currentIndex: 0
          }
      },
      methods: {
        tabControlClick(index) {
          this.currentIndex = index
        }
      }
    }
</script>

<style scoped>

    .tab-control {
      display: flex;
      text-align: center;
      font-size: 15px;
      height: 40px;
      line-height: 40px;
    }

    .tab-control-item span {
      padding: 5px;
    }
    .tab-control-item {
      flex: 1;

    }
  .active {
    color: #ff8198;
  }

  .active span {
    border-bottom: 2px solid #ff8198;
  }
</style>
