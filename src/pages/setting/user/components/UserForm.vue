/**
* Description: 用户表单
*
* Created by longyihuang on 2019/12/6
* E-Mail: 475865662@qq.com
*/

<template>
  <div v-if="userDetail">
    <el-form style="width: 400px; margin: 0px auto" :model="userDetail" :rules="rules" ref="userForm" label-width="100px" label-suffix=":">
      <el-form-item label="账号">
        <el-input
          disabled
          class="normal-input"
          v-model="userDetail.username"
        />
      </el-form-item>

      <el-form-item label="药房名称">
        <el-input
          disabled
          class="normal-input"
          v-model="userDetail.pharmacyInfo.name"
        />
      </el-form-item>

      <el-form-item label="姓名" prop="nickname">
        <el-input
          class="normal-input"
          v-model="userDetail.nickname"
        />
      </el-form-item>

      <el-form-item label="联系电话" prop="phone">
        <el-input
          class="normal-input"
          v-model="userDetail.phone"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">保存</el-button>
        <el-button style="margin-left: 10px" type="warning" @click="showEditPasswordDialog = true">修改密码</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      v-if="showEditPasswordDialog"
      width="500px"
      title="修改密码"
      :visible="showEditPasswordDialog"
      :before-close="() => {showEditPasswordDialog = false}"
      :close-on-click-modal="false"
      center
    >
      <EditPasswordForm @onEditPassword="handleEditPassword"/>
    </el-dialog>
  </div>
</template>

<script>

	import EditPasswordForm from "./EditPasswordForm";
	export default {
		name: "UserForm",
		components: { EditPasswordForm },
    model: {
			prop: 'userDetail',
      event: 'onChange'
    },
		props: {
			userDetail: {
				type: Object,
				default: function () {
					return {};
				}
			}
		},
		data () {
			return {
				showEditPasswordDialog: false,
				rules: {
					nickname: [
						{ required: true, message: '请输入名称', trigger: 'blur' }
					],
					phone: [
						{ required: true, message: '请输入联系电话', trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			submitForm () {
				this.$refs['userForm'].validate((valid) => {
					if (valid) {
						this.$emit('onUpdateUserInfo', this.userDetail);
					}
				});
			},

			handleEditPassword (passwordForm) {
				this.$emit('onEditPassword', passwordForm);
      },

      hiddenDialog () {
	      this.showEditPasswordDialog = false
      }
		}
	}
</script>

<style lang='scss' scoped>

</style>
