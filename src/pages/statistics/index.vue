/**
* Description: 统计
*
* Created by longyihuang on 2019/11/28
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="statistics-container">
    <ContentWrapper headerColor="#fff">
      <div slot="left">
        <span class="title">核心指标</span>
      </div>
      <div slot="right">
        <i class="el-icon-info"></i>
      </div>
      <div v-if="isAdmin" slot="content" class="target-container">
        <div class="target-item" style="background: #6980f9">
          <span class="target-label">药房总数</span>
          <span class="target-value">{{statistics.pharmacyCount}}</span>
        </div>

        <div class="target-item" style="background: #f8776c">
          <span class="target-label">药品总数</span>
          <span class="target-value">{{statistics.drugCount}}</span>
        </div>

        <div class="target-item" style="background: #a46dfa">
          <span class="target-label">今日销售额(元)</span>
          <span class="target-value">{{statistics.saleAmount}}</span>
        </div>
      </div>

      <div v-else slot="content" class="target-container">
        <div class="target-item" style="background: #6980f9">
          <span class="target-label" >药品总数</span>
          <span class="target-value">{{statistics.drugCount}}</span>
        </div>

        <div class="target-item" style="background: #f8776c">
          <span class="target-label">当月销售数量</span>
          <span class="target-value">{{statistics.saleCount}}</span>
        </div>

        <div class="target-item" style="background: #a46dfa">
          <span class="target-label">当月销售额(元)</span>
          <span class="target-value">{{statistics.saleAmount}}</span>
        </div>
      </div>
    </ContentWrapper>


    <ContentWrapper style="margin-top: 20px" headerColor="#fff">
      <div slot="left">
        <span class="title">近期药品走势</span>
      </div>
      <div slot="right" class="drug-search-container">
        <label class="normal-text">商品名</label>
        <el-select
          style="width: 400px"
          size="mini"
          v-model="drugId"
          filterable
          remote
          placeholder="请输入药品名"
          :remote-method="queryDrugOptions"
          :loading="loading"
          @change="queryDrugStatistics"
        >
          <el-option
            v-for="(item, index) in drugOptions"
            :key="index"
            :label="`${item.genericName}(${item.approvalNum})`"
            :value="item.id">
          </el-option>
        </el-select>
      </div>
      <LineChart slot="content" :chartData="chartData" />
    </ContentWrapper>
  </div>
</template>

<script>
  import ContentWrapper from "@/components/basic/ContentWrapper";
  import LineChart from "@/components/charts/LineChart";
  import { getSubDate } from "@/common/timeUtils";
  import { queryDrugOption } from "../../api/drug";
  import { Role } from "../../common/globalContants";
  import { queryAdminStatistics, queryPharmacyStatistics, queryDrugStatistics } from "@/api/statistics";
  import { color16 } from "../../common/utils";
  export default {
    name: "Statistics",
    components: { LineChart, ContentWrapper },

    data () {
	    const dates = []
	    for (let i = 7; i > 0; i--) {
		    dates.push(getSubDate(i))
	    }
      return {
	    	statistics: {},
	      loading: false,
	      drugId: undefined,
	      drugOptions: [],
	      filters: [
		      {
			      type: 'input',
			      fieldName: 'drugName',
			      label: '药品名',
			      clearable: true
		      }
	      ],
        chartData: {

        }
      }
    },

    mounted () {
      this.queryStatistics();
      this.queryDrugStatistics();
    },

    computed: {
    	isAdmin () {
		    const roles = this.$store.getters.roles;
    		if (roles && roles.includes(Role.ADMIN)) {
    			return true
        }
        return false;
      }
    },


    methods: {
    	async queryStatistics () {
		    let statistics;
    		if (this.isAdmin) {
			    statistics = await queryAdminStatistics();
        } else {
			    statistics = await queryPharmacyStatistics();
        }
        this.statistics = statistics;
      },


	    async queryDrugStatistics (drugId) {
        const data = await queryDrugStatistics({
          drugId
        });
        console.log(data);
		    let dates = [];
		    let contents = [];
        if (data && data.length > 0) {
          const d = data[0].data;
          if (d && d.length > 0) {
            dates = d.map(item => item.date);
          }
          contents = data.map(item => {
            const color = color16();
            return {
              name: item.specificationName,
              data: item.data.map(d => d.averagePrice),
              smooth: true,
              type: 'line',
              itemStyle: {
                normal: {
                  color,
                  lineStyle: {
                    color,
                    width: 2
                  }
                }
              }
            }
          });
        }
		    this.chartData = {
			    yAxis: {
				    name: '价格'
			    },
			    xAxis: {
				    name: '日期',
				    data: dates
			    },
			    data: contents
		    }
      },

	    async queryDrugOptions (query) {
    		console.log(query)
		    if (query !== '') {
			    this.loading = true;
          const data = await queryDrugOption({
            currentPage: 1,
            pageSize: 100,
	          genericName: query
          });
          if (data) {
          	this.drugOptions = data.rows;
          }
          this.loading = false;
		    } else {
			    this.drugOptions = [];
		    }
	    }
    }
  }
</script>

<style lang='scss' scoped>
  .statistics-container{
    .title{
      color: #4fd0a3;
      font-size: 12px;
    }
    .target-container{
      display: flex;
      height: 150px;
      justify-content: space-between;
      .target-item{
        width: 180px;
        margin: 20px 20px;
        padding: 10px 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
        .target-value{
          font-size: 26px;
          font-weight: bold;
          color: #fff;
        }
        .target-label{
          font-size: 12px;
          color: #fff;
          margin-bottom: 20px;
        }
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
  }

</style>
