/**
* Description: 药品列表
*
* Created by longyihuang on 2019/12/3
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <el-table
      :data="dataSource">
      <el-table-column
        prop="approvalNum"
        label="批准文号">
      </el-table-column>

      <el-table-column
        prop="genericName"
        label="通用名">
      </el-table-column>

      <el-table-column
        prop="name"
        label="商品名">
      </el-table-column>

      <el-table-column
        prop="typeName"
        label="类型">
      </el-table-column>

      <el-table-column
        label="规格">
        <template slot-scope="scope">
          <span v-for="(item, index) in scope.row.specificationList" :key="index">
            {{item.name}}
          </span>
        </template>
      </el-table-column>

      <el-table-column
        prop="companyName"
        label="生产厂家">
      </el-table-column>

      <el-table-column
        v-if="isAdmin"
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
          <el-button
            type="text"
            @click="handleClickDetail(scope.row)"
          >
            编辑
          </el-button>

          <el-popover
            placement="bottom"
            v-model="scope.row.popoverVisble">
            <p>确认删除?</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text"  @click="()=> {scope.row.popoverVisble = false}">取消</el-button>
              <el-button type="primary" size="mini" @click="handleClickDelete(scope.row)">确定</el-button>
            </div>
            <el-button
              type="text"
              slot="reference"
              style="color: red; margin-left: 5px"
              @click="()=> {dataSource.popoverVisble = true}"
            >
              删除
            </el-button>
          </el-popover>
        </template>
      </el-table-column>

    </el-table>
    <div class="pagination">
      <el-pagination
        background
        @size-change="handlePageSizeChange"
        @current-change="handlePageChange"
        :current-page.sync="currentPage"
        :page-sizes="[10, 20, 50]"
        :page-size="pageSize"
        layout="total, prev, pager, next, sizes"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import { tableList } from "@/extends";
  import { queryDrugs } from "@/api/drug";
  import { Role } from "@/common/globalContants";
  export default {
    name: "DrugList",
    extends: tableList,
    props: {
      showPrice: {
        type: Boolean,
        default: false
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

    mounted () {
      this.queryData();
    },
    methods: {
      queryData (queryParams = undefined) {
        this.getDataSource(queryDrugs, queryParams);
      },

	    handleClickDetail (row) {
      	this.$emit('onClickEdit', row);
      },

	    handleClickDelete (row) {
		    row.popoverVisble = false;
		    this.$emit('onClickDelete', row);
      }
    }
  }
</script>

<style lang='scss' scoped>
  .pagination{
    margin-top: 5px;
    text-align: right;
  }
</style>
