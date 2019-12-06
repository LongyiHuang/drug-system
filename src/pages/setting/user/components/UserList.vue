/**
* Description: 用户列表
*
* Created by longyihuang on 2019/12/3
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <el-table
      :data="dataSource">
      <el-table-column
        prop="title"
        label="名称">
      </el-table-column>

      <el-table-column
        prop="title"
        label="联系电话">
      </el-table-column>

      <el-table-column
        prop="title"
        label="账号">
      </el-table-column>

      <el-table-column
        prop="title"
        label="新增时间">
      </el-table-column>


      <el-table-column
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
        </template>
      </el-table-column>

    </el-table>
    <div class="pagination">
      <el-pagination
        background
        @size-change="handlePageSizeChange"
        @current-change="handlePageChange"
        :current-page.sync="ppage"
        :page-sizes="[10, 20, 50]"
        :page-size="pnumber"
        layout="total, prev, pager, next, sizes"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {tableList} from "@/extends";
  export default {
    name: "UserList",
    extends: tableList,
    props: {
      showPrice: {
        type: Boolean,
        default: false
      }
    },
    mounted () {
      // this.queryData();
    },
    methods: {
      queryData () {
        // this.getDataSource(queryData);
      },

	    handleClickDetail (row) {

      },

	    handleClickDelete (row) {

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
