/**
* Description: 药房表单
*
* Created by longyihuang on 2019/12/6
* E-Mail: 475865662@qq.com
*/

<template>
  <el-form style="width: 400px; margin: 0px auto" :model="pharmacyDetail" :rules="rules" ref="pharmacyForm" label-width="100px" label-suffix=":">
    <el-form-item label="药房名称" prop="pharmacyName">
      <el-input
        class="normal-input"
        v-model="pharmacyDetail.pharmacyName"
      />
    </el-form-item>


    <el-form-item label="地址" prop="pharmacyAddress">
      <el-input
        class="normal-input"
        v-model="pharmacyDetail.pharmacyAddress"
      />
    </el-form-item>

    <el-form-item label="账号" prop="username">
      <el-input
        class="normal-input"
        v-model="pharmacyDetail.username"
      />
    </el-form-item>

    <el-form-item label="姓名" prop="nickname">
      <el-input
        class="normal-input"
        v-model="pharmacyDetail.nickname"
      />
    </el-form-item>

    <el-form-item label="联系电话" prop="phone">
      <el-input
        class="normal-input"
        v-model="pharmacyDetail.phone"
      />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">保存</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

	export default {
		name: "PharmacyForm",
		props: {
			pharmacyDetail: {
				type: Object,
				default: function () {
					return {};
				}
			}
		},
    data () {
			return {
				rules: {
					pharmacyName: [
						{ required: true, message: '请输入药房名称', trigger: 'blur' }
					],
					pharmacyAddress: [
						{ required: true, message: '请输入药房地址', trigger: 'blur' }
					],
					username: [
						{ required: true, message: '请输入账号', trigger: 'blur' }
					],
          nickname: [
						{ required: true, message: '请输入姓名', trigger: 'blur' }
					],
          phone: [
						{ required: true, message: '请输入联系电话', trigger: 'blur' }
					]
        }
      }
    },
    methods: {
	    submitForm () {
		    this.$refs['pharmacyForm'].validate((valid) => {
			    if (valid) {
				    this.$emit('onSubmit', this.pharmacyDetail);
			    }
		    });
	    }
    }
	}
</script>

<style lang='scss' scoped>
.pharmacy-form-container{
  display: flex;
  justify-content: center;
}
</style>
