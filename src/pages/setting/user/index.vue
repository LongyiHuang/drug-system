/**
* Description: 用户管理
*
* Created by longyihuang on 2019/12/3
* E-Mail: 475865662@qq.com
*/

<template>
  <div>
    <HeaderWrapper>
      <ListFilterBar slot="left" :filters="filters" :clearable="false" @onFilter="handleSearch" />
    </HeaderWrapper>
    <UserList ref="userList"/>
  </div>
</template>

<script>
  import UserList from "./components/UserList";
  import HeaderWrapper from "@/components/basic/HeaderWrapper";
  import ListFilterBar from "@/components/basic/ListFilterBar";

  export default {
    name: "User",
	  components: {HeaderWrapper, UserList, ListFilterBar},
	  data () {
		  return {
			  showAddUserDialog: false,
			  filters: [
				  {
					  type: 'input',
					  fieldName: 'approvalNumber',
					  label: '账号',
					  clearable: true
				  },
				  {
					  type: 'input',
					  fieldName: 'approvalNumber',
					  label: '药房',
					  clearable: true
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
