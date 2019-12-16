/**
* Description: 内容框框
*
* Created by longyihuang on 2019/10/24
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="content-wrapper-container">
    <div class="header" :style="{background: headerColor}">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div  class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
    export default {
      name: "ContentWrapper",
	    props: {
		    headerColor: {
			    type: String,
			    default: null
		    }
	    }
    }
</script>

<style lang='scss' scoped>
  .content-wrapper-container{
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0,0,0,0.35);
    border-radius: 5px;
    box-shadow: 5px 5px 5px rgba(0,21,41,.08);
    .header{
      height: 40px;
      display: flex;
      align-items: center;
      border-radius: 5px 5px 0px 0px;
      justify-content: space-between;
      background: #f0f0f0;
      padding: 0px 20px;
      border-bottom: 1px solid #f0f0f0;
    }
    .content{
      background: #fff;
      padding: 20px;
    }
  }
</style>
