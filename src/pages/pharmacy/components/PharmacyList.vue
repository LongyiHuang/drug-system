/**
* Description: 药房列表
*
* Created by longyihuang on 2019/12/3
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <el-table
      :data="dataSource">
      <el-table-column
        prop="pharmacyName"
        label="药房名称">
      </el-table-column>

      <el-table-column
        prop="nickname"
        label="联系人">
      </el-table-column>

      <el-table-column
        prop="phone"
        label="联系电话">
      </el-table-column>

      <el-table-column
        prop="username"
        label="账号">
      </el-table-column>

      <el-table-column
        prop="pharmacyAddress"
        label="地址">
      </el-table-column>

      <el-table-column
        label="新增时间">
        <template slot-scope="scope">
          <span>{{scope.row.createTime | dateFormat}}</span>
        </template>
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

          <el-popover
            style="margin-left: 5px"
            placement="bottom"
            v-model="scope.row.popoverVisble">
            <p>确认删除?</p>
            <div style="text-align: right; margin: 0">
              <el-button size="mini" type="text" @click="popoverVisble = false">取消</el-button>
              <el-button type="primary" size="mini"  @click="handleClickDelete(scope.row)">确定</el-button>
            </div>
            <el-button
              slot="reference"
              type="text"
              style="color: red"
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
  import { queryPharmacies } from "@/api/pharmacy";
  export default {
    name: "PharmacyList",
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
        this.getDataSource(queryPharmacies, queryParams);
      },

	    handleClickDetail (row) {
        this.$emit('onClickEditDetail', row);
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
