 <!--公用组件：Tabbar 组件
    /**
     * Tabbar 组件
     * @module ../components/tabbar/tabbar
     * @desc 生成一个tabbar组件
     * @author LieZuoPing
     * @date 2018年7月30日11点
     * @example 调用示例：
     *  <Tabbar></Tabbar>
     */
-->
<template>
  <div class="vuec_tabbar">
    <ul>
        <li class="vuec_tabar_item"
        v-for="(item, index) in tabbarConfig"
        :key="index" :id="index"
        :style= "{width: `${Number.parseInt(100/tabbarConfig.length)}%`}"
        @click.stop="onChange(index, item.default)"
        >
        <slot :name="`tabbarItem${item.index}`">
          <img :src="`${item.default === true ? item.enterSrc: item.leaveSrc}`" alt="图标" srcset="" class="tabbar_icon" slots="image">
          <span class="tarbar_name" :style="{color: `${item.default === true ? item.enterColor: item.leaveColor}`}">{{item.title}}</span>
        </slot>
        </li>
    </ul>
  </div>
</template>

<script>
import prpos from './props'
export default {
  name: 'Tabbar',
  props: prpos,
  data () {
    return {
    }
  },
  created () {
  },
  methods: {
    /**
     * @desc 切换tabbar时改变样式和跳转路由
     * @param { Number } [index]  - 点击的tabbar的Index值
     * @param { Boolean } [isSelect]  - 是否选中
     */
    onChange (index, isSelect) {
      let vm = this
      // console.log(`当前的选项是：${index}`)
      if (!isSelect) {
        for (let data of this.$props.tabbarConfig) {
          data.default = false
        }
        this.$props.tabbarConfig[index].default = true
        this.$router.push({
          path: vm.$props.tabbarConfig[index].path,
          query: vm.$props.tabbarConfig[index].query
        })
      }
      this.changeTarbar(index)
    },
    /**
     * @desc 对外暴露出来的方法：on-change，每次切换时父组件可以拿到当前组件的信息
     * @param { Number } [index]  - 当前的index值
     */
    changeTarbar (index) {
      this.$emit('on-change', this.$props.tabbarConfig[index])
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import './tabbar';
.vuec_tabbar {
  position: $position_type;
  @include location_ele(none,0,0,0);
  background: #fff;
  width:100%;
  box-sizing: border-box;
  height: px2rem($tabbar_height);
  ul {
    display: flex;
    flex-direction: row;
    justify-content:space-around;
    flex-wrap: nowrap;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    position: relative;
    &:before {
      @include border_top_point5_line ($border_color);
    }
    .vuec_tabar_item {
      height: 100%;
      box-sizing: border-box;
      padding: px2rem(10px) px2rem(30px);
      text-align: center;
      position: relative;
      &:after {
        @include border_left_point5_line;
      }
      .tabbar_icon {
        width: $tabbar_icon_width;
        display: block;
        margin: 0 auto;
      }
      .tarbar_name {
        display: block;
        font-size: px2rem($tabbar_font_size);
      }
    }
    .vuec_tabar_item:first-of-type {
      &:after {
        display: none;
      }
    }
  }
}

</style>
