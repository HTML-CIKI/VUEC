 <!--公用组件：Tree 组件
    /**
     * 树形结构组件
     * @module ../components/tree/tree
     * @desc 生成一个树形图结构
     * @author LieZuoPing
     * @date 2018年7月30日11点
     * @example 调用示例：
     *  <Tree  @on-click="tapTreeItem"></Tree>
     */
-->
<template>
  <ul class="vuec_tree">
    <li v-for="(item, index) in nodeData.child" :key="item.id">
      <div class="item" @click.stop ="tapFather(item)" :style="{border: `${item.sex === 1 ? boyBorder : girlBorder}` }">
          <span>{{item.title}}</span>
          <img :src="item.portrait === ''? ( item.sex === 1 ? '../../../static/images/tree/boy.png' : '../../../static/images/tree/girl.png'):item.portrait" alt="" >
          <span>{{item.name}}</span>
          <div class="spouse" v-if="item.spouse.length !==0" @click.stop="tapFather(item.spouse)">
              <span>{{item.spouse[0].title}}</span>
              <img :src="item.spouse[0].portrait === ''? '../../../static/images/tree/girl.png':item.portrait" alt="你猜" title="测试">
              <span>{{item.spouse[0].name}}</span>
          </div>
      </div>
      <em class="line_left" v-if="index !== 0" :data="index"></em>
      <em class="line_right" v-if="(index) !== (nodeData.child.length-1)" :data="nodeData.child.length"></em>
      <!-- 递归组件自己 -->
      <Tree v-if="item.child.length !==0" :nodeData="item"></Tree>
    </li>
  </ul>
</template>

<script>
import defaultProps from './props'
export default {
  name: 'Tree',
  props: {
    nodeData: {
      type: Object,
      default: function () {
        return defaultProps[0]
      }
    }
  },
  data () {
    return {
      index: 2,
      data: '../../../static/images/logo.png',
      boyBorder: 'solid 1px #1296db',
      girlBorder: 'solid 1px pink'
    }
  },
  created () {
    // console.log(this.$props.nodeData)
  },
  methods: {
    tapFather (item) {
      this.$bus.emit('on-click', item)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './tree';
ul {
    display: flex;
    margin: 10px 30px;
    flex-direction: row ;
    margin: 0 auto;
    width:100%;
    box-sizing: border-box;
    flex-wrap: nowrap;
    position: relative;
    justify-content:center;
  li {
    box-sizing: border-box;
    display: flex;
    padding: 0 px2rem(70px);
    flex-direction: column ;
    text-align: center;
    position: relative;
    .item, .spouse{
      display: block;
      margin: 0 auto;
      background: $item_back_color;
      border: $tree_node_border;
      margin-bottom: px2rem(60px);
      span{
        width: px2rem(120px);
        height: px2rem(40px);
        display: block;
      }
      img{
        width: px2rem(120px);
        height: px2rem(80px);
        display: block;
      }
    }
    .item {
      position: relative;
      background: $item_back_color;
    }
    .spouse {
      position: absolute;
      left: px2rem(140px);
      border: $spouse_border;
      top:0;
    }
    .spouse::after{
      content: ' ';
      display:block;
      position: absolute;
      width: px2rem(20px);
      height: 3px;
      background: $tree_border_color;
      left: px2rem(-20px);
      z-index: -1;
      top:px2rem(80px);
    }
    .item::after {
      content: ' ';
      display:block;
      position: absolute;
      width: 3px;
      height: px2rem(34px);
      background: $tree_border_color;
      left: px2rem(58px);
      z-index: -1;
      bottom:px2rem(-30px);
    }
    .item::before {
      content: ' ';
      display: block;
      position: absolute;
      width: 3px;
      height: px2rem(34px);
      background: $tree_border_color;
      left: px2rem(58px);
      z-index: -1;
      top: px2rem(-36px);
    }
    .line_left,.line_right {
      display: block;
      position: absolute;
      height: 3px;
      background: $tree_border_color;
      z-index: -1;
      right: 50%;
      top: px2rem(-34px);
      left: px2rem(-30px);
    }
    .line_right {
      right: px2rem(30px);
      left: 50%;
      background: $tree_border_color;
    }
  }
}

</style>
