/**
* Description: 头部内容集装箱
*
* Created by longyihuang on 2019/9/30
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="header-wrap" >
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
    export default {
      name: "HeaderWrapper"
    }
</script>

<style lang='scss' scoped>
  .header-wrap{
    min-height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.15);
    padding: 0 15px;
  }
</style>
