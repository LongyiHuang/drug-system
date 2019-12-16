/**
* Description: 管理员管理
*
* Created by longyihuang on 2019/12/3
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
        @click="() => {showAddAdminDialog = true}"
      >
        新增管理员
      </el-button>
    </HeaderWrapper>
    <AdminList ref="adminList"/>

    <el-dialog
      v-if="showAddAdminDialog"
      title="新增药房"
      :visible="showAddAdminDialog"
      :before-close="() => {showAddAdminDialog = false}"
      :close-on-click-modal="false"
    >
      <AdminForm @onSubmit="handleAddAdmin"/>
    </el-dialog>
  </div>
</template>

<script>
  import AdminForm from "./components/AdminForm";
  import AdminList from "./components/AdminList";
  import HeaderWrapper from "@/components/basic/HeaderWrapper";
  import ListFilterBar from "@/components/basic/ListFilterBar";

  export default {
    name: "Admin",
	  components: {AdminForm, HeaderWrapper, AdminList, ListFilterBar},
	  data () {
		  return {
			  showAddAdminDialog: false,
			  filters: [
				  {
					  type: 'input',
					  fieldName: 'approvalNumber',
					  label: '管理员账号',
					  clearable: true
				  }
			  ]
		  }
	  },
	  methods: {
		  handleSearch (params) {
			  console.log(params)
		  },

		  handleAddAdmin () {

		  }
	  }
  }
</script>

<style lang='scss' scoped>

</style>
