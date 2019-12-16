/**
* Description: 药品表单
*
* Created by longyihuang on 2019/12/10
* E-Mail: 475865662@qq.com
*/

<template>
  <el-form ref="drugDetail" :model="drugDetail" :rules="rules" label-width="100px" label-suffix=":">
    <el-form-item label="商品名" prop="name">
      <el-input
        class="normal-input"
        v-model="drugDetail.name"
      />
    </el-form-item>

    <el-form-item label="通用名称" prop="genericName">
      <el-input
        class="normal-input"
        v-model="drugDetail.genericName"
      />
    </el-form-item>

    <el-form-item label="药品类型" prop="type">
      <el-select v-model="drugDetail.type">
        <el-option
          v-for="(item, index) in drugTypeOption"
          :key="index"
          :value="item.value"
          :label="item.name"/>
      </el-select>
    </el-form-item>

    <el-form-item label="批准文号" prop="approvalNum">
      <el-input
        class="normal-input"
        v-model="drugDetail.approvalNum"
        :disabled="editableApprovalNum"
      />
    </el-form-item>

    <el-form-item label="生产厂家" prop="companyName">
      <el-input
        class="normal-input"
        v-model="drugDetail.companyName"
      />
    </el-form-item>

    <el-form-item label="批准日期" prop="approvalDate">
      <el-date-picker
        v-model="drugDetail.approvalDate"
        type="date"
        value-format="timestamp"
        placeholder="选择日期">
      </el-date-picker>
    </el-form-item>

    <el-form-item label="有效期" prop="expiryDate">
      <el-date-picker
        v-model="drugDetail.expiryDate"
        type="date"
        value-format="timestamp"
        placeholder="选择日期">
      </el-date-picker>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm">保存</el-button>
    </el-form-item>

  </el-form>
</template>

<script>
	export default {
		name: "DrugForm",

    props: {
	    drugDetail: {
				type: Object,
        default: function () {
          return {}
        }
      }
    },

    computed: {
			editableApprovalNum () {
				return this.drugDetail.id !== undefined
      }
    },

		data () {
			return {
				drugTypeOption: [
          { name: '国产药', value: 1 },
          { name: '进口药', value: 2 }
        ],
				rules: {
					name: [
						{ required: true, message: '请输入商品名称', trigger: 'blur' }
					],
					genericName: [
						{ required: true, message: '请输入通用名称', trigger: 'blur' }
					],
					approvalNum: [
						{ required: true, message: '请输入批准文号', trigger: 'blur' }
					],
					companyName: [
						{ required: true, message: '请输入生产厂家', trigger: 'blur' }
					],
					approvalDate: [
						{ required: true, message: '请输入批准日期', trigger: 'change' }
					],
					expiryDate: [
						{ required: true, message: '请输入有效日期', trigger: 'change' }
					],
					type: [
						{ required: true, message: '请选择药品类型', trigger: 'change' }
					]
				}
			}
		},

		methods: {
			submitForm () {
				this.$refs['drugDetail'].validate((valid) => {
					if (valid) {
						this.$emit('onSubmit', this.drugDetail);
					}
				});
			}
		}
	}
</script>

<style lang='scss' scoped>

</style>
