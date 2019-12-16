/**
* Description: 数据列表过滤器 返回过滤条件
*
* Created by longyihuang on 2019/10/12
* E-Mail: 475865662@qq.com
*/

<template>
  <div class="record-filter-container">
    <div class="filter-item" v-for="(item, index) in filters" :key="index">
      <span class="normal-text" >{{item.label}}</span>
      <el-date-picker
        v-if="item.type === 'timePickerRange'"
        class="time-picker-item"
        v-model="filterData[item.fieldName]"
        size="mini"
        type="daterange"
        :format="item.format"
        value-format="timestamp"
        range-separator="至"
        :start-placeholder="item.startPlaceholder"
        :end-placeholder="item.endPlaceholder">
      </el-date-picker>

      <el-input
        v-else-if="item.type === 'input'"
        :placeholder="item.placeholder"
        size="mini"
        v-model="filterData[item.fieldName]"
        :clearable="item.clearable"
      />

      <el-select
        v-else-if="item.type === 'select'"
        v-model="filterData[item.fieldName]"
        :placeholder="item.placeholder"
        size="mini"
        :clearable="item.clearable"
      >
        <el-option
          v-for="(option, i) in filterData[item.fieldName + 'Options']"
          :key="i"
          :label="option.name"
          :value="option.value">
        </el-option>
      </el-select>

      <section v-else-if="item.type === 'numberRange'" class="number-range-container">
        <el-input-number :placeholder="item.startPlaceholder" v-model="filterData[item.fieldName][0]" size="mini" />
        <span class="normal-text">至</span>
        <el-input-number :placeholder="item.endPlaceholder"  v-model="filterData[item.fieldName][1]" size="mini" />
      </section>
    </div>
    <div class="button-box">
      <el-button size="mini" type="primary" @click="handleFilter">搜索</el-button>
      <el-button v-if="clearable" size="mini" @click="handleReset" >重置</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListFilterBar",
  props: {
    filters: {
      type: Array,
      default: function () {
        return []
      }
    },
    clearable: {
      type: Boolean,
      default: function () {
        return true
      }
    }

  },
  data () {
    const filterData = {};
    this.filters.forEach(item => {
      if (item.type === 'select') {
        filterData[item.fieldName + 'Options'] = item.options || [];
      } else if (item.type === 'numberRange') {
        filterData[item.fieldName] = [];
      } else {
        filterData[item.fieldName] = undefined;
      }
    });
    return {
      filterData
    };
  },

  mounted () {
    this.getSelectOptions();
  },

  methods: {
     getSelectOptions () {
      this.filters.forEach(async item => {
        if (item.type === 'select') {
          const data = await item.optionApi();
          this.filterData[item.fieldName + 'Options'] = data.rows
        }
      });
    },

    handleReset () {
      Object.keys(this.filterData).forEach(key => {
        if (key.indexOf('Options') >= 0 && (this.filterData[key] instanceof Array)) {
          return true
        } else if (this.filterData[key] instanceof Array) {
          this.filterData[key] = [];
        } else {
          this.filterData[key] = undefined;
        }
      });
      this.$emit('onReset');
    },

    handleFilter () {
      const filterData = {};
      this.filters.forEach(item => {
        filterData[item.fieldName] = this.filterData[item.fieldName];
      });
      this.$emit('onFilter', filterData);
    }

  }
}
</script>

<style lang='scss' scoped>
.record-filter-container{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  .filter-item {
    display: flex;
    margin: 5px 10px;
    align-items: center;
  }

  span{
    white-space: nowrap;  /*强制span不换行*/
    display: inline-block;  /*将span当做块级元素对待*/
    margin-right: 5px;
  }

  .number-range-container{
    display: flex;
    align-items: center;
    span{
      margin: 0 5px;
    }
  }


  .button-box{
    margin-left: 10px;
  }
}
</style>
