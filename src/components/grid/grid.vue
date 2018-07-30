 <!--公用组件：九宫格组件
    /**
     * 九宫格组件
     * @module ../components/grid/grid
     * @desc 九宫格组件
     * @author LieZuoPing
     * @date 2018年7月30日14点
     * @example 调用示例：
     * <Gird class="gird">
     *  <GirdItem v-for="item in shopList" :key="item.index" :max="2" >
     *    <div>
     *      <img :src="item.imageurl" class="shopImg">
     *      <span>{{item.wname}}</span>
     *    </div>
     *  </GirdItem>
     * </Gird>
     */
-->
<template>
    <div class="vuec_grid" >
      <slot></slot>
    </div>
</template>

<script>
// import prpos from './prop'
export default {
  name: 'Grid',
  props: {
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/config.base';
@import './grid';
.vuec_grid {
  display: flex;
  width: 100%;
  position: relative;
  flex-wrap: wrap;
  flex-direction: row;
  overflow: hidden;
  justify-content:flex-start;
  &:before {
    @include border_top_point5_line($border_color);
  }
  &:before {
    @include border_left_point5_line($border_color);
  }
}

</style>
