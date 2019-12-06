/**
* Description: 用户表单
*
* Created by longyihuang on 2019/12/6
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="user-form-container">
    <el-form style="width: 70%" :model="userDetail" :rules="rules" ref="userForm" label-width="100px" label-suffix=":">
      <el-form-item label="账号">
        <el-input
          disabled
          class="normal-input"
          v-model="userDetail.account"
        />
      </el-form-item>

      <el-form-item label="药房名称">
        <el-input
          disabled
          class="normal-input"
          v-model="userDetail.pharmacyName"
        />
      </el-form-item>

      <el-form-item label="姓名" prop="name">
        <el-input
          class="normal-input"
          v-model="userDetail.name"
        />
      </el-form-item>

      <el-form-item label="联系电话" prop="phone">
        <el-input
          class="normal-input"
          v-model="userDetail.phone"
        />
      </el-form-item>

      <el-form-item label="账号密码" prop="password">
        <el-input
          type="password"
          class="normal-input"
          v-model="userDetail.password"
        />
      </el-form-item>

      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input
          type="password"
          class="normal-input"
          v-model="userDetail.confirmPassword"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

	export default {
		name: "UserForm",
		props: {
			userDetail: {
				type: Object,
				default: function () {
					return {};
				}
			}
		},
		data () {
			const validatePassword = (rule, value, callback) => {
				if (value) {
					if (value.length >= 6) {
						return callback();
          }
					return callback(new Error('密码长度需至少6位'));
				}
				callback(new Error('请输入密码'));
			};
			const validateConfirmPassword = (rule, value, callback) => {
				if (value) {
					if (value === this.userDetail.password) {
						return callback();
					}
					return callback(new Error('确认密码与密码不一致'));
				}
				callback(new Error('请输入确认密码'));
			};

			return {
				rules: {
					name: [
						{ required: true, message: '请输入名称', trigger: 'blur' }
					],
					phone: [
						{ required: true, message: '请输入联系电话', trigger: 'blur' }
					],
          password: [
            { required: true, validator: validatePassword, trigger: 'blur' }
          ],
					confirmPassword: [
						{ required: true, validator: validateConfirmPassword, trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			submitForm () {
				this.$refs['userForm'].validate((valid) => {
					if (valid) {
						console.log(this.userDetail)
					}
				});
			}
		}
	}
</script>

<style lang='scss' scoped>
  .user-form-container{
    display: flex;
    justify-content: center;
  }
</style>
