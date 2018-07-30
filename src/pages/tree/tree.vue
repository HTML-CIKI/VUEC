 <!--公用组件：Tree 组件
    /**
     * 树形结构组件
     * @module ../components/tree/tree
     * @desc 组件描述
     * @author LieZuoPing
     * @date 2018年7月24日17点
     * @param {Object} [title]    - 参数说明
     * @param {String} [columns] - 参数说明
     * @example 调用示例
     *  <c-button :title="title" :columns="columns" :tableData="tableData"></c-button>
     */
-->
<template>
<div class="tree_wrap">
  <div class="tree" :style="{minWidth: width}" ref="tree">
    <TreeNode  @on-click="tapTreeItem"></TreeNode>
  </div>
</div>
</template>

<script>
import { TreeNode } from '../../components'
import { mapState } from 'vuex'
export default {
  name: 'Tree',
  components: {
    TreeNode
  },
  data () {
    return {
      width: '375px'
    }
  },
  computed: mapState({ // 测试vuex 项目架构数据
    test: state => state.treeModule.test
  }),
  created () {
    this.$bus.on('on-click', this.tapTreeItem)
  },
  mounted () {
    this.width = this.$refs.tree.children[0].firstChild.clientWidth + 20 + 'px'
  },
  beforeDestroy () {
    this.$bus.off('on-click', this.tapTreeItem)
  },
  methods: {
    tapTreeItem (e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '../../style/config.base.scss';
.tree_wrap {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  overflow: scroll;
  position: relative;
  .tree {
    position: absolute;
    left: 0;
    top: 0;
    padding: 40px;
    height: 100%;
    overflow: scroll;
    box-sizing: border-box;
    zoom: 1;
  }
}
</style>
