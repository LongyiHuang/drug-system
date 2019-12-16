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
        v-if="showAddDrug"
        slot="right"
        type="primary"
        size="small"
        @click="showAddDrugDialog = true"
        icon="el-icon-plus"
      >
        新增药品
      </el-button>
    </HeaderWrapper>
    <DrugList ref="drugList" @onClickEdit="handleClickEdit" @onClickDelete="handleDeleteDrug"/>
    <el-dialog
      v-if="showAddDrugDialog"
      title="添加药品"
      :visible="showAddDrugDialog"
      :before-close="() => {showAddDrugDialog = false}"
      :close-on-click-modal="false"
    >
      <DrugForm @onSubmit="handleAddDrug"/>
    </el-dialog>
    <el-dialog
      v-if="showEditDrugDialog"
      title="编辑药品"
      :visible="showEditDrugDialog"
      :before-close="() => {showEditDrugDialog = false}"
      :close-on-click-modal="false"
    >
      <DrugForm :drug-detail="currentDrug" @onSubmit="handleEditDrug"/>
    </el-dialog>
  </div>
</template>

<script>
  import ListFilterBar from "@/components/basic/ListFilterBar";
  import HeaderWrapper from "@/components/basic/HeaderWrapper";
  import DrugList from "./components/DrugList";
  import DrugForm from "./components/DrugForm";
  import { createDrug, deleteDrug, updateDrug } from "@/api/drug";
  import {Role} from "../../../common/globalContants";
  export default {
    name: "Drug",
	  components: { DrugList, ListFilterBar, HeaderWrapper, DrugForm },
	  data () {
		  return {
		  	showAddDrugDialog: false,
			  showEditDrugDialog: false,
        currentDrug: undefined,
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
				  }
			  ]
		  }
	  },
    computed: {
    	showAddDrug () {
    		let showAddDrug = false;
    		const roles = this.$store.getters.roles;
    		if (roles && roles.includes(Role.ADMIN)) {
			    showAddDrug = true;
        }
        return showAddDrug;
      }
    },

	  methods: {
		  handleSearch (params) {
			  this.$refs['drugList'].queryData(params);
		  },


		  async handleAddDrug (drugForm) {
        await createDrug(drugForm)
        this.showAddDrugDialog = false;
        this.$message.success('添加成功');
        this.$refs['drugList'].queryData();
      },

		  handleClickEdit (drug) {
		  	if (drug) {
		  		this.currentDrug = {
            ...drug
          };
		  		this.showEditDrugDialog = true;
        }
      },
		  async handleEditDrug (drugForm) {
			  await updateDrug(drugForm)
			  this.showEditDrugDialog = false;
			  this.$message.success('编辑成功');
			  this.$refs['drugList'].queryData();
		  },

		  async handleDeleteDrug (drug) {
		  	if (drug) {
				  await deleteDrug(drug.id)
				  this.$message.success('删除成功');
				  this.$refs['drugList'].queryData();
        }
      }
	  }
  }
</script>

<style lang='scss' scoped>

</style>
