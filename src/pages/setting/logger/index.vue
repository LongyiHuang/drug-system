/**
* Description: 操作日志
*
* Created by longyihuang on 2019/12/3
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <HeaderWrapper>
      <ListFilterBar slot="left" :filters="filters" :clearable="false" @onFilter="handleSearch" />
    </HeaderWrapper>
    <LoggerList ref="loggerList"/>
  </div>
</template>

<script>
  import LoggerList from "./components/LoggerList";
  import HeaderWrapper from "@/components/basic/HeaderWrapper";
  import ListFilterBar from "@/components/basic/ListFilterBar";

  export default {
    name: "Logger",
	  components: {HeaderWrapper, LoggerList, ListFilterBar},
	  data () {
		  return {
			  filters: [
				  {
					  type: 'input',
					  fieldName: 'approvalNumber',
					  label: '账号',
					  clearable: true
				  }
			  ]
		  }
	  },
	  methods: {
		  handleSearch (params) {
			  console.log(params)
		  },

		  handleAddLogger () {

		  }
	  }
  }
</script>

<style lang='scss' scoped>

</style>
