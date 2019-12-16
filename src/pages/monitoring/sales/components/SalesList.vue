/**
* Description: 销售记录列表
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
        prop="drugGenericName"
        label="通用名">
      </el-table-column>

      <el-table-column
        prop="specificationName"
        label="规格">
      </el-table-column>

      <el-table-column
        prop="pharmacyName"
        label="药房">
      </el-table-column>

      <el-table-column
        v-if="showPrice"
        prop="averagePrice"
        label="价格">
      </el-table-column>

      <el-table-column
        prop="quantity"
        label="销量">
      </el-table-column>

      <el-table-column
        prop="title"
        label="导入时间">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | dateFormat}}</span>
        </template>
      </el-table-column>
      <el-table-column
        v-if="!showPrice"
        label="操作"
        align="center"
      >
        <template slot-scope="scope">
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
  import { querySales } from "@/api/sales";
  export default {
    name: "DrugList",
    extends: tableList,
    props: {
      showPrice: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      this.queryData();
    },
    methods: {
      queryData (queryParams) {
        this.getDataSource(querySales, queryParams);
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
