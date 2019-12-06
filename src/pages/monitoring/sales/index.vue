/**
* Description: 销量监控
*
* Created by longyihuang on 2019/12/2
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <ListFilterBar :filters="filters" :clearable="false" @onFilter="handleSearch" />
    <DrugList ref="drugList"/>
  </div>
</template>

<script>
  import ListFilterBar from "@/components/basic/ListFilterBar";
  import DrugList from "./components/DrugList";
  export default {
    name: "Sales",
    components: { DrugList, ListFilterBar },
    data () {
      return {
        filters: [
          {
            type: 'input',
            fieldName: 'approvalNumber',
            label: '资产目录',
            clearable: true
          },
          {
            type: 'input',
            fieldName: 'commonName',
            label: '通用名',
            clearable: true
          },
          {
            type: 'input',
            fieldName: 'pharmacy',
            label: '药房',
            clearable: true
          },
          {
            type: 'timePickerRange',
            fieldName: 'createTime',
            label: '导入时间'
          }
        ]
      }
    },
    methods: {
      handleSearch (params) {
        console.log(params)
      }
    }
  }
</script>

<style lang='scss' scoped>

</style>
