/**
* Description: 修改密码表单
*
* Created by longyihuang on 2019/12/10
* E-Mail: 475865662@qq.com
*/


<template>
    <el-form style="width: 400px; margin: 0px auto" :model="passwordForm" :rules="rules" ref="passwordForm" label-width="100px" label-suffix=":">
      <el-form-item label="原始密码" prop="oldPassword">
        <el-input
          type="password"
          class="normal-input"
          v-model="passwordForm.oldPassword"
        />
      </el-form-item>

      <el-form-item label="新密码" prop="newPassword">
        <el-input
          type="password"
          class="normal-input"
          v-model="passwordForm.newPassword"
        />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">保存</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
	export default {
		name: "EditPasswordForm",
		data () {
			const validatePassword = (rule, value, callback) => {
				if (value) {
					if (value.length < 6) {
						return callback(new Error('密码长度需至少6位'));
					}
					if (value === this.passwordForm.oldPassword) {
						return callback(new Error('新密码不可与新密码一致'));
					}
					return callback();
				}
				callback(new Error('请输入密码'));
			};

			return {
				passwordForm: {},
				rules: {
					oldPassword: [
						{ required: true, message: '请输入原始密码', trigger: 'blur' }
					],
					newPassword: [
						{ required: true, validator: validatePassword, trigger: 'blur' }
					]
				}
			}
		},
		methods: {
			submitForm () {
				this.$refs['passwordForm'].validate((valid) => {
					if (valid) {
						this.$emit('onEditPassword', this.passwordForm);
					}
				});
			}
		}
	}
</script>

<style lang='scss' scoped>

</style>

