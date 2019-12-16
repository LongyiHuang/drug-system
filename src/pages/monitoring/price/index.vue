/**
* Description: 价格监督
*
* Created by longyihuang on 2019/12/2
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <ListFilterBar :filters="filters" :clearable="false" @onFilter="handleSearch" />
    <SalesList ref="salesList" show-price/>
  </div>
</template>

<script>
  import ListFilterBar from "@/components/basic/ListFilterBar";
  import SalesList from "../sales/components/SalesList";
  export default {
    name: "Price",
    components: { SalesList, ListFilterBar },
    data () {
      return {
        filters: [
	        {
		        type: 'input',
		        fieldName: 'approvalNum',
		        label: '批准文号',
		        clearable: true
	        },
	        {
		        type: 'input',
		        fieldName: 'genericName',
		        label: '通用名',
		        clearable: true
	        },
	        {
		        type: 'input',
		        fieldName: 'pharmacyName',
		        label: '药房',
		        clearable: true
	        },
	        {
		        type: 'timePickerRange',
		        fieldName: 'timeStamp',
		        label: '导入时间'
	        }
        ]
      }
    },
    methods: {
      handleSearch (queryParams) {
	      if (queryParams) {
		      this.$refs['salesList'].queryData({
			      approvalNum: queryParams.approvalNum,
			      genericName: queryParams.genericName,
			      pharmacyName: queryParams.pharmacyName,
			      startTimeStamp: queryParams.timeStamp ? queryParams.timeStamp[0] : undefined,
			      endTimeStamp: queryParams.timeStamp ? queryParams.timeStamp[1] : undefined
		      });
	      }
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
