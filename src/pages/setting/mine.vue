/**
* Description: 我的账户
*
* Created by longyihuang on 2019/12/3
* E-Mail: 475865662@qq.com
*/

<template>
  <UserForm ref="userForm" v-model="userInfo" @onUpdateUserInfo="handleUpdateUserInfo" @onEditPassword="handleEditPassword"/>
</template>

<script>
  import UserForm from "./user/components/UserForm";
  import { getUserInfo, setUserInfo } from "@/common/utils";
  import { updatePassword, updateUserInfo } from "@/api/user";
  export default {
    name: "Mine",
	  components: { UserForm },

    data () {
    	return {
		    userInfo: getUserInfo()
      }
    },

    methods: {
	    async handleUpdateUserInfo (userInfo) {
	    	const newUserInfo = {
			    nickname: userInfo.nickname,
			    phone: userInfo.phone
        }
		    userInfo && await updateUserInfo(newUserInfo);
	    	this.$message.success('编辑成功');
        setUserInfo({
	        ...userInfo,
	        ...newUserInfo
        })
      },
	    async handleEditPassword (passwordForm) {
		    passwordForm && await updatePassword({
			    oldPassword: passwordForm.oldPassword,
			    newPassword: passwordForm.newPassword
		    });
		    this.$message.success('编辑成功');
		    this.$refs['userForm'].hiddenDialog();
	    }
    }
  }
</script>

<style lang='scss' scoped>

</style>
