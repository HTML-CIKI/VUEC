<template>
  <a class="vuec_grid_item" :style="{width: `${100/max}%`}" @click.stop="fnClick(gridItemData.link)">
    <img :src="gridItemData.src" alt="Image" srcset="" v-if="gridItemData.src">
    <span v-if="gridItemData.title" >{{gridItemData.title}}</span>
    <slot></slot>
  </a>
</template>

<script>
export default {
  name: 'GridItem',
  props: {
    gridItemData: {
      type: Object,
      default: function () {
        return {
          title: '',
          src: ``,
          link: ``,
          index: 0
        }
      }
    },
    max: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    /**
     * @desc 暴露点击事件
     * @param { String } url - 跳转的url参数
     */
    fnClick (url) {
      this.tabitem(this.$props.gridItemData)
      if (url !== '') {
        this.$router.push({
          path: url
        })
      }
    },
    tabitem (value) {
      this.$emit('on-click', value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/config.base';
@import './grid';
.vuec_grid_item {
  padding: $grid_item_padding;
  box-sizing: border-box;
  background:$grid_item_bg_color;
  text-align: center;
  width: 100%;
  display: block;
  text-decoration: none;
  font-size: $font_size;
  color: $font_color;
  position: relative;
  overflow: hidden;
  &:before {
    @include border_right_point5_line($border_color);
  }
  &:after {
    @include border_bottom_point5_line($border_color);
  }
  &:hover{
    background: $grid_item_hover_bg_color;
    color: red;
  }
  img {
    display: block;
    width: $gird_item_img_width;
    margin: 0 auto;
  }
}

</style>
