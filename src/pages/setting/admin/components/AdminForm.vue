/**
* Description: 管理员表单
*
* Created by longyihuang on 2019/12/6
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="admin-form-container">
    <el-form style="width: 70%" :model="adminDetail" :rules="rules" ref="adminForm" label-width="100px" label-suffix=":">
      <el-form-item label="姓名" prop="name">
        <el-input
          class="normal-input"
          v-model="adminDetail.name"
        />
      </el-form-item>

      <el-form-item label="联系电话" prop="phone">
        <el-input
          class="normal-input"
          v-model="adminDetail.phone"
        />
      </el-form-item>

      <el-form-item label="账号" prop="account">
        <el-input
          class="normal-input"
          v-model="adminDetail.account"
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
		name: "AdminForm",
		props: {
			adminDetail: {
				type: Object,
				default: function () {
					return {};
				}
			}
		},
    data () {
			return {
				rules: {
					name: [
						{ required: true, message: '请输入名称', trigger: 'blur' }
					]
        }
      }
    },
    methods: {
	    submitForm () {
		    this.$refs['adminForm'].validate((valid) => {
			    if (valid) {
				    console.log(this.adminDetail)
			    }
		    });
	    }
    }
	}
</script>

<style lang='scss' scoped>
.admin-form-container{
  display: flex;
  justify-content: center;
}
</style>
