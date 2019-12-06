/**
* Description: 药房管理
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
        @click="() => {showAddPharmacyDialog = true}"
      >
        新增药房
      </el-button>
    </HeaderWrapper>
    <PharmacyList ref="pharmacyList"/>

    <el-dialog
      v-if="showAddPharmacyDialog"
      title="新增药房"
      :visible="showAddPharmacyDialog"
      :before-close="() => {showAddPharmacyDialog = false}"
      :close-on-click-modal="false"
    >
      <PharmacyForm @onSubmit="handleAddPharmacy"/>
    </el-dialog>
  </div>
</template>

<script>
  import ListFilterBar from "../../components/basic/ListFilterBar";
  import PharmacyList from "./components/PharmacyList";
  import HeaderWrapper from "../../components/basic/HeaderWrapper";
  import PharmacyForm from "./components/PharmacyForm";
  export default {
    name: "Pharmacy",
    components: {PharmacyForm, HeaderWrapper, PharmacyList, ListFilterBar},
	  data () {
		  return {
			  showAddPharmacyDialog: false,
			  filters: [
				  {
					  type: 'input',
					  fieldName: 'approvalNumber',
					  label: '药房',
					  clearable: true
				  }
			  ]
		  }
	  },
	  methods: {
		  handleSearch (params) {
			  console.log(params)
		  },

		  handleAddPharmacy () {

      }
	  }
  }
</script>

<style lang='scss' scoped>

</style>
