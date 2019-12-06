/**
* Description: 药品管理
*
* Created by longyihuang on 2019/12/2
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <HeaderWrapper>
      <ListFilterBar slot="left" :filters="filters" :clearable="false" @onFilter="handleSearch" />
      <el-button
        slot="right"
        type="primary"
        size="small"
        @click="handleClickAddDrug"
      >
        新增药品
      </el-button>
    </HeaderWrapper>
    <DrugList ref="drugList"/>
  </div>
</template>

<script>
  import ListFilterBar from "@/components/basic/ListFilterBar";
  import HeaderWrapper from "@/components/basic/HeaderWrapper";
  import DrugList from "./components/DrugList";
  export default {
    name: "Drug",
	  components: {DrugList, ListFilterBar, HeaderWrapper},
	  data () {
		  return {
			  filters: [
				  {
					  type: 'input',
					  fieldName: 'approvalNumber',
					  label: '批准文号',
					  clearable: true
				  },
				  {
					  type: 'input',
					  fieldName: 'commonName',
					  label: '通用名',
					  clearable: true
				  }
			  ]
		  }
	  },
	  methods: {
		  handleSearch (params) {
			  console.log(params)
		  },

		  handleClickAddDrug () {

      }
	  }
  }
</script>

<style lang='scss' scoped>

</style>
