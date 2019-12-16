/**
* Description: 用户管理
*
* Created by longyihuang on 2019/12/3
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <HeaderWrapper>
      <ListFilterBar slot="left" :filters="filters" :clearable="false" @onFilter="handleSearch" />
    </HeaderWrapper>
    <UserList ref="userList" @onClickDelete="handleDeleteUser" @onClickResetPassword="handleResetPassword"/>
  </div>
</template>

<script>
  import UserList from "./components/UserList";
  import HeaderWrapper from "@/components/basic/HeaderWrapper";
  import ListFilterBar from "@/components/basic/ListFilterBar";
  import { deleteUser, resetPassword } from "@/api/user";

  export default {
    name: "User",
	  components: { HeaderWrapper, UserList, ListFilterBar },
	  data () {
		  return {
			  showAddUserDialog: false,
			  filters: [
				  {
					  type: 'input',
					  fieldName: 'username',
					  label: '账号',
					  clearable: true
				  },
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
		  async handleSearch (queryParams) {
			  this.$refs['userList'].queryData(queryParams);
		  },

		  async handleDeleteUser (user) {
		  	if (user && user.id) {
          await deleteUser(user.id);
          this.$message.success('删除成功');
          this.$refs['userList'].queryData();
        }
      },

		  async handleResetPassword (user) {
			  if (user && user.id) {
				  await resetPassword(user.id);
				  this.$message({
					  showClose: true,
            message: '重置成功, 密码重置为123456',
					  type: 'success',
					  duration: 0
          });
			  }
      }
	  }
  }
</script>

<style lang='scss' scoped>

</style>
