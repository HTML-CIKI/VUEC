 <!--公用组件：CHeader 组件
    /**
     * Header 组件
     * @module ../components/header/header
     * @desc 头部标题组件
     * @author LieZuoPing
     * @date 2018年7月30日11点
     * @example 调用示例：
     *  <CHeader></CHeader>
     */
-->
<template>
  <div class="vuec_cheader">
    <slot name="vuec_header_left">
      <div class="left"  @click="goBack">
        <img :src="leftIconSrc" alt="back" srcset="">
        <span>返回</span>
      </div>
    </slot>
    <slot name="vuec_header_center">
      <div class="center">{{headerTitle}}</div>
    </slot>
    <slot name="vuec_header_right">
      <div class="right">
        <img src="../../../static/images/header/right-order-icon.svg" alt="" srcset="">
      </div>
    </slot>
  </div>
</template>

<script>
import prpos from './props'
export default {
  name: 'CHeader',
  props: prpos,
  data () {
    return {
      leftIconSrc: this.$props.leftIcon.leftEnterIconSrc
    }
  },
  created () {
    // console.log(this.$props)
  },
  methods: {
    /**
     * @desc 点击返回后页面后退
     */
    goBack () {
      this.$router ? this.$router.back() : window.history.back()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './header';
.vuec_cheader {
  position: $position_type;
  @include location_ele(0,none,0,0);
  background:$header_background_color;
  height: $header_height;
  font-size: $header_font_size;
  color: $header_font_color;
  line-height: $header_height;
  box-sizing: border-box;
  .left {
    height: 100%;
    width: 20%;
    font-size: px2rem(14px);
    box-sizing: border-box;
    float: left;
    padding: px2rem(20px) px2rem(10px);
    img {
      width: 25px;
      height: 100%;
      float: left;
    }
    span {
      float: left;
      font-size: px2rem(30px);
      line-height: ($header_height - px2rem(40px));
    }
  }
  .center {
    height: 100%;
    box-sizing: border-box;
    float: left;
    width: 60%;
    text-align: center;
    line-height: $header_height;
  }
  .right {
    height: 100%;
    box-sizing: border-box;
    float: left;
    width: 20%;
    text-align: center;
    padding: px2rem(20px) px2rem(10px);
    line-height: $header_height;
    img {
      width: px2rem(60px);
    }
  }
}

</style>
