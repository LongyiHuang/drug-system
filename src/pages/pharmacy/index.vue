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
    <PharmacyList
      ref="pharmacyList"
      @onClickEditDetail="handleClickEditPharmacy"
      @onClickDelete="handleDeletePharmacy"/>

    <el-dialog
      v-if="showAddPharmacyDialog"
      title="新增药房"
      :visible="showAddPharmacyDialog"
      :before-close="() => {showAddPharmacyDialog = false}"
      :close-on-click-modal="false"
    >
      <PharmacyForm @onSubmit="handleAddPharmacy"/>
    </el-dialog>

    <el-dialog
      v-if="showEditPharmacyDialog"
      title="编辑药房"
      :visible="showEditPharmacyDialog"
      :before-close="() => {showEditPharmacyDialog = false}"
      :close-on-click-modal="false"
    >
      <PharmacyForm :pharmacy-detail="currentPharmacy" @onSubmit="handleUpdatePharmacy"/>
    </el-dialog>
  </div>
</template>

<script>
  import ListFilterBar from "@/components/basic/ListFilterBar";
  import PharmacyList from "./components/PharmacyList";
  import HeaderWrapper from "@/components/basic/HeaderWrapper";
  import PharmacyForm from "./components/PharmacyForm";
  import { createPharmacy, deletePharmacy, updatePharmacy } from "@/api/pharmacy";
  export default {
    name: "Pharmacy",
    components: { PharmacyForm, HeaderWrapper, PharmacyList, ListFilterBar },
	  data () {
		  return {
			  showAddPharmacyDialog: false,
			  showEditPharmacyDialog: false,
			  currentPharmacy: undefined,
			  filters: [
				  {
					  type: 'input',
					  fieldName: 'pharmacyName',
					  label: '药房',
					  clearable: true
				  }
			  ]
		  }
	  },
	  methods: {
		  handleSearch (queryParams) {
			  this.$refs['pharmacyList'].queryData(queryParams);
		  },

		  async handleAddPharmacy (pharmacy) {
			  if (pharmacy) {
				  await createPharmacy({
					  name: pharmacy.pharmacyName,
					  address: pharmacy.pharmacyAddress,
            username: pharmacy.username,
            nickname: pharmacy.nickname,
            phone: pharmacy.phone
				  });
				  this.showAddPharmacyDialog = false;
				  this.$message.success('添加成功');
				  this.$refs['pharmacyList'].queryData();
			  }
      },

		  handleClickEditPharmacy (pharmacy) {
		  	this.showEditPharmacyDialog = true;
        this.currentPharmacy = {
          ...pharmacy
        }
      },

		  async handleUpdatePharmacy (pharmacy) {
        if (pharmacy && pharmacy.pharmacyId) {
        	await updatePharmacy({
            id: pharmacy.pharmacyId,
            name: pharmacy.pharmacyName,
            address: pharmacy.pharmacyAddress,
		        username: pharmacy.username,
		        nickname: pharmacy.nickname,
		        phone: pharmacy.phone
          });
          this.showEditPharmacyDialog = false;
          this.$message.success('编辑成功');
          this.$refs['pharmacyList'].queryData();
        }
      },

		  async handleDeletePharmacy (pharmacy) {
	      if (pharmacy && pharmacy.pharmacyId) {
		      await deletePharmacy(pharmacy.pharmacyId);
		      this.$message.success('编辑成功');
		      this.$refs['pharmacyList'].queryData();
	      }
      }
	  }
  }
</script>

<style lang='scss' scoped>

</style>
