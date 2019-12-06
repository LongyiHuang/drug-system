/**
* Description: 统计
*
* Created by longyihuang on 2019/11/28
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <ContentWrapper>
      <div slot="left">
        <span class="big-text">昨日核心指标</span>
      </div>
      <div slot="right">
        <i class="el-icon-info"></i>
      </div>
      <div slot="content" class="target-container">
        <div class="target-item">
          <span class="normal-text">药房总数</span>
          <span class="target-value">100</span>
        </div>
        <div class="target-item">
          <span class="normal-text">药品总数</span>
          <span class="target-value">1000</span>
        </div>
        <div class="target-item">
          <span class="normal-text">销售额(元)</span>
          <span class="target-value">10000</span>
        </div>
      </div>
    </ContentWrapper>


    <ContentWrapper style="margin-top: 20px">
      <div slot="left">
        <span class="big-text">近期药品走势</span>
      </div>
      <div slot="right" class="drug-search-container">
        <label class="normal-text">药品名</label>
        <el-input size="small" placeholder="输入药品名查询"></el-input>
        <el-button size="small" >搜索</el-button>
      </div>
      <LineChart slot="content" :chartData="chartData"/>
    </ContentWrapper>
  </div>
</template>

<script>
  import ContentWrapper from "../../components/basic/ContentWrapper";
  import ListFilterBar from "../../components/basic/ListFilterBar";
  import LineChart from "../../components/charts/LineChart";
  export default {
    name: "Statistics",
    components: {LineChart, ListFilterBar, ContentWrapper},
    data () {
      return {
        chartData: {
          actualData: [120, 82, 91, 154, 162, 140, 145]
        }
      }
    }
  }
</script>

<style lang='scss' scoped>
.target-container{
  display: flex;
  height: 150px;
  .target-item{
    width: 33%;
    margin: 30px 0px;
    padding: 10px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    .target-value{
      font-size: 26px;
      font-weight: bold;
      color: #333333;
    }
  }
  .target-item:nth-child(2){
   border-left: 1px solid #d9d9d9;
   border-right: 1px solid #d9d9d9;
  }
}

.drug-search-container{
  display: inline-flex;
  flex-flow: nowrap;
  align-items: center;
  label{
    white-space: nowrap;  /*强制span不换行*/
    display: inline-block;  /*将span当做块级元素对待*/
    margin-right: 5px;
  }
  button{
    margin-left: 5px;
  }
}
</style>
