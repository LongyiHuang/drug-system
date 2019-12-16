/**
* Description: 销量监控
*
* Created by longyihuang on 2019/12/2
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <HeaderWrapper>
      <ListFilterBar slot="left" :filters="filters" :clearable="false" @onFilter="handleSearch" />
      <div style="display: flex;" slot="right" v-if="!isAdmin">
        <el-upload
          style="margin: 0px 10px"
          name="file"
          accept=".xls,.xlsx"
          :show-file-list="false"
          :headers="headers"
          :action="action"
          :on-success="handleUploadSuccess"
        >
          <el-button size="small" type="success" icon="el-icon-upload2">上传药品</el-button>
        </el-upload>

        <el-button
          type="primary"
          size="small"
          icon="el-icon-download"
          @click="downloadTemplate"
        >
          下载模板
        </el-button>
      </div>
    </HeaderWrapper>
    <SalesList :show-price="!isAdmin" ref="salesList" @onClickDelete="handleDeleteSalesRecord"/>
  </div>
</template>

<script>
  import ListFilterBar from "@/components/basic/ListFilterBar";
  import SalesList from "./components/SalesList";
  import HeaderWrapper from "@/components/basic/HeaderWrapper";
  import { TEMPLATE_DOWNLOAD_URL, UPLOAD_SALE_RECORD_URL, Role } from "@/common/globalContants";
  import { deleteSales } from "@/api/sales";
  export default {
    name: "Sales",
    components: { HeaderWrapper, SalesList, ListFilterBar },
    data () {
      return {
      	action: UPLOAD_SALE_RECORD_URL,
	      headers: {
      		authorization: 'authorization-text'
        },
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
          },
	        {
		        type: 'input',
		        fieldName: 'pharmacyName',
		        label: '药房',
		        clearable: true
	        },
          {
            type: 'timePickerRange',
            fieldName: 'timeStamp',
            label: '导入时间'
          }
        ]
      }
    },
    computed: {
	    isAdmin () {
		    let isAdmin = false;
		    const roles = this.$store.getters.roles;
		    if (roles && roles.includes(Role.ADMIN)) {
			    isAdmin = true;
		    }
		    return isAdmin;
	    }
    },


    methods: {
      handleSearch (queryParams) {
        if (queryParams) {
	        this.$refs['salesList'].queryData({
		        approvalNum: queryParams.approvalNum,
		        genericName: queryParams.genericName,
		        pharmacyName: queryParams.pharmacyName,
            startTimeStamp: queryParams.timeStamp ? queryParams.timeStamp[0] : undefined,
            endTimeStamp: queryParams.timeStamp ? queryParams.timeStamp[1] : undefined
	        });
        }
      },

	    downloadTemplate () {
		    window.open(TEMPLATE_DOWNLOAD_URL, '_blank'); // 新开窗口下载
      },

      handleUploadSuccess (response, file, fileList) {
        console.log(file)
        if (file.response) {
        	const { status, message } = file.response;
          if (status === 1) {
	          this.$message.success('上传成功');
	          this.$refs['salesList'].queryData();
          } else {
          	this.$message.error(message)
          }
        }
      },

	    async handleDeleteSalesRecord (record) {
      	console.log(record)
      	if (record) {
		      await deleteSales(record.recordId);
		      this.$message.success('删除成功');
		      this.$refs['salesList'].queryData();
        }
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
