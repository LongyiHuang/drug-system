/**
* Description: 头部组件
*
* Created by longyihuang on 2019/9/30
* E-Mail: 475865662@qq.com
*/

<template>
  <header-wrapper>
    <h1 class="title" slot="left">{{title}}</h1>
    <slot name="right" slot="right"></slot>
  </header-wrapper>
</template>

<script>
  import HeaderWrapper from './HeaderWrapper';

  export default {
    name: "HeaderComponent",
    props: {
      title: {
        type: String,
        default: function () {
          return ''
        }
      }
    },
    components: {
      HeaderWrapper
    }
  }
</script>

<style lang='scss' scoped>
  .title{
    font-size: 18px;
    width: 150px;
  }
</style>
